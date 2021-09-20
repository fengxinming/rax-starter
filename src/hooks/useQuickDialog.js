import { mount } from '@/common/component-util';
import { useRef, createElement } from 'rax';

export default function (component) {
  const cache = useRef(null);

  if (!cache.current) {
    const manip = {
      currentProps: {},
      show(props) {
        props = Object.assign({
          visible: true,
          onClose: () => manip.hide(),
        }, props);

        manip.currentProps = props;
        mount(createElement(component, props));
      },
      hide(props) {
        const { currentProps } = manip;
        currentProps.visible = false;
        Object.assign(currentProps, props);
        mount(createElement(component, currentProps));
      },
    };
    cache.current = manip;
  }

  return cache.current;
}
