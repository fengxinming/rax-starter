import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import { history } from 'rax-app';

import './index.styl';

export default function CFeatures({
  className,
  features,
  labelKey = 'label',
  iconKey = 'icon',
  linkKey = 'link',
  ...rest
}) {
  return (
    <View x-class={['c-features', className]} {...rest}>
      <View
        x-for={(feature, index) in features}
        key={index}
        className="c-features-item"
        onClick={() => feature.link && history.push(feature[linkKey])}
      >
        <Image className="c-features-item-icon" source={{ uri: feature[iconKey] }} />
        <Text className="c-features-item-label">
          {feature[labelKey]}
        </Text>
      </View>
    </View>
  );
}
