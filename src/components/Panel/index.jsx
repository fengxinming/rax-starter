import { createElement } from 'rax';
import View from 'rax-view';
import CHeader from '../Header';
import './index.scss';

function CPanel({
  title,
  text,
  link,
  className,
  children,
  ...rest
}) {
  return (
    <View x-class={['c-panel', className]} {...rest}>
      <CHeader
        x-if={title}
        title={title}
        text={text}
        link={link}
      />
      <View className="c-panel-content">
        {children}
      </View>
    </View>
  );
}

export default CPanel;
