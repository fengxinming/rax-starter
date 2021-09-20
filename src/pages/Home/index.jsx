import { createElement } from 'rax';
import { history } from 'rax-app';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Features from '@/components/Features';
import Header from '@/components/Header';
import useAction from '@/hooks/useAction';
import { initialActions, initialState } from './scripts';

import styles from './index.module.scss';

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
  online,
  total,
}) {
  const goDevices = () => {
    history.push('/my-devices');
  };

  const goOnlineDevices = () => {
    history.push('/my-devices?deviceStatus=ONLINE');
  };

  const preNotice = () => {
    history.push('/');
  };

  return (
    <View className={styles['card-row']}>
      <Card
        label="总设备数"
        value={total}
        icon="https://img.alicdn.com/imgextra/i3/O1CN01txRtuX1xCSIU7085U_!!6000000006407-2-tps-100-100.png"
        onClick={goDevices}
      />

      <Card
        label="在线设备"
        value={online}
        icon="https://img.alicdn.com/imgextra/i4/O1CN01RjbOnM1ZGX2oqGdpM_!!6000000003167-2-tps-100-100.png"
        onClick={goOnlineDevices}
      />

      <Card
        label="待处理通知"
        value={0}
        icon="https://img.alicdn.com/imgextra/i1/O1CN01BIWl5X1TX7hLQCOon_!!6000000002391-2-tps-100-100.png"
        onClick={preNotice}
      />
    </View>
  );
}


function Home() {
  const {
    state: {
      features,
      online,
      total,
    },
    useInit,
  } = useAction(initialState, initialActions);

  useInit();

  return (
    <View className="ic-page">
      <CardPanel
        online={online}
        total={total}
      />

      <View className={styles['function-panel']}>
        <Header
          className={styles['function-panel-header']}
          title="快速入口"
          link="/home/all-services"
          text="全部"
        />
        <Features className={styles['function-panel-features']} features={features} />
      </View>
    </View>
  );
}

export default Home;
