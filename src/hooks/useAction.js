import { useRef, useState } from 'rax';
import { forOwn, isFunction } from 'celia';

function shallowCompare(prevState, currentState) {
  if (isFunction(currentState)) {
    currentState = currentState(prevState);
    if (!currentState) {
      return null;
    }
  }
  let changed = false;
  forOwn(currentState, (v, k) => {
    if (v !== prevState[k]) {
      changed = changed || true;
    }
  });
  return changed ? { ...prevState, ...currentState } : null;
}


export default function useAction(initialState, initialActions) {
  const cache = useRef(null);
  const [, setState] = useState();

  if (!cache.current) {
    const manip = {
      state: initialState || {},
      setState(currentState) {
        const prevState = manip.state;
        currentState = shallowCompare(prevState, currentState);
        if (currentState !== null) {
          setState(currentState);
          manip.state = currentState;
        }
      },
    };
    forOwn(initialActions, (fn, action) => {
      if (isFunction(fn)) {
        manip[action] = (fn).bind(manip, manip);
      }
    });
    cache.current = manip;
  }

  return cache.current;
}
