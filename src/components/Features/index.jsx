import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import { history } from 'rax-app';

import './index.scss';

export default function ICFeatures({
  className,
  features,
  labelKey = 'label',
  iconKey = 'icon',
  linkKey = 'link',
  ...rest
}) {
  return (
    <View x-class={['ic-features', className]} {...rest}>
      <View
        x-for={(feature, index) in features}
        key={index}
        className="ic-features-item"
        onClick={() => feature.link && history.push(feature[linkKey])}
      >
        <Image className="ic-features-item-icon" source={{ uri: feature[iconKey] }} />
        <Text className="ic-features-item-label">
          {feature[labelKey]}
        </Text>
      </View>
    </View>
  );
}
