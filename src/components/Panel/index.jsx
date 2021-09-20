import { createElement } from 'rax';
import View from 'rax-view';
import ICHeader from '../Header';
import './index.scss';

function ICPanel({
  title,
  text,
  link,
  insideTitle,
  className,
  children,
  ...rest
}) {
  return (
    <View x-class={['ic-panel', className]} {...rest}>
      <ICHeader
        x-if={title && !insideTitle}
        title={title}
        text={text}
        link={link}
        type="sub"
      />
      <View className="ic-panel-content">
        <ICHeader
          x-if={title && insideTitle}
          title={title}
          text={text}
          link={link}
        />
        {children}
      </View>
    </View>
  );
}

export default ICPanel;
