import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Features from '@/components/Features';
import { BASIC_COMPONENTS } from './scripts';

import styles from './index.module.styl';
import CPanel from '@/components/Panel';

function Card({
  icon,
  label,
  value,
  ...rest
}) {
  return (
    <View className={styles['card-col']} {...rest}>
      <View className={styles['card-item']}>
        <View className={styles['card-img-block']}>
          <Image className={styles['card-icon']} source={{ uri: icon }} />
        </View>
        <Text className={styles['card-label']}>{label}</Text>
        <Text className={styles['card-value']}>{value}</Text>
      </View>
    </View>
  );
}

function CardPanel({
  cards,
}) {
  return (
    <View className={styles['card-row']}>
      <Card
        x-for={(item, index) in cards}
        key={index}
        label={item.label}
        value={item.value}
        icon={item.icon}
      />
    </View>
  );
}


function Home() {
  return (
    <View className={styles['page-home']}>
      <CardPanel
        cards={[{
          label: '基础组件',
          value: BASIC_COMPONENTS.length,
          icon: 'https://img.alicdn.com/imgextra/i3/O1CN01txRtuX1xCSIU7085U_!!6000000006407-2-tps-100-100.png',
        }, {
          label: '自定义组件',
          value: 0,
          icon: 'https://img.alicdn.com/imgextra/i4/O1CN01RjbOnM1ZGX2oqGdpM_!!6000000003167-2-tps-100-100.png',
        }, {
          label: '功能组件',
          value: 0,
          icon: 'https://img.alicdn.com/imgextra/i1/O1CN01BIWl5X1TX7hLQCOon_!!6000000002391-2-tps-100-100.png',
        }]}
      />

      <View x-class={[styles['c-panel-layout'], styles['features-panel']]}>
        <CPanel title="基础组件">
          <Features features={BASIC_COMPONENTS} />
        </CPanel>
      </View>
    </View>
  );
}

export default Home;
