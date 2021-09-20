import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import View from 'rax-view';

export function createICComponent(
  Component,
  defaultClassName,
) {
  return function ({
    className,
    ...rest
  }) {
    return (
      <View x-class={[defaultClassName, className]}>
        <Component
          className
          {...rest}
        />
      </View>
    );
  };
}

export function mount(appInstance, rootEl) {
  return render(appInstance, rootEl, {
    driver: DriverUniversal,
  });
}

// @ts-ignore
export function unmount(appInstance) {
  return appInstance._internal.unmountComponent.bind(appInstance._internal);
}
