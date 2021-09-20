import { createElement } from 'rax';
import { history } from 'rax-app';
import View from 'rax-view';
import Text from 'rax-text';
import { Icon } from '@alifd/meet';

import './index.scss';

/**
 * 标题组件
 */
export default function ICHeader({
  className,
  text, // 链接文字
  link,
  title,
  type, // 次级标题
  extra,
  ...rest
}) {
  const forward = () => {
    history.push(link);
  };

  return (
    <View x-class={[className, 'ic-header', type === 'sub' && 'ic-header--sub']} {...rest}>
      <Text className="ic-header-title">{title}</Text>
      <View x-if={text || link} className="ic-header-link" onClick={link && forward}>
        <Text x-if={text} className="ic-header-link-text">
          {text}
        </Text>
        <Icon
          x-if={link}
          className="ic-header-link-arrow"
          type="arrow-right"
          size="xs"
        />
      </View>
      <slot name="extra" />
    </View>
  );
}
