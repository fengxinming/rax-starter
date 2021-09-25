import { createElement } from 'rax';
import View from 'rax-view';
import CHeader from '../Header';
import './index.styl';

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

export function CPanelLayout(props) {
  return (
    <View className="c-panel-layout">
      {props.children}
    </View>
  );
}

export default CPanel;
