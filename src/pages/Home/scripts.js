import { useEffect } from 'rax';
import http from '@/common/http';
// import { myServices } from '@/config/pages';

const EMPTY_ARR = [];
const ICON_TAG_TYPE = '图标';

export const initialState = {
  features: EMPTY_ARR,
  online: 0,
  total: 0,
};

export const initialActions = {
  // 获取设备统计
  getDeviceCount() {
    return http({
      url: '/api/icube/device/userDeviceCount',
    }).then((res) => {
      return res || {
        offlineDeviceCount: 0,
        onlineDeviceCount: 0,
        totalDeviceCount: 0,
      };
    });
  },

  // 获取场景列表
  getFeatures() {
    return http({
      url: '/api/icube/scene/scenes',
      dataPath: 'data.data.sceneList',
    }).then((list) => {
      return list
        ? list.map((n) => {
          const { sceneTagList } = n;
          const tag = sceneTagList.find((m) => m.tagType === ICON_TAG_TYPE) || {};
          const tagDesc = JSON.parse(tag.tagDesc || '{}');
          return {
            label: n.sceneName,
            link: tagDesc.link,
            icon: tagDesc.icon,
          };
        })
        : EMPTY_ARR;
    }).catch(() => EMPTY_ARR);
  },

  useInit({ getDeviceCount, getFeatures, setState }) {
    useEffect(() => {
      Promise.all([
        getDeviceCount(),
        getFeatures(),
      ]).then(([device, features]) => {
        setState({
          features,
          online: device.onlineDeviceCount,
          total: device.totalDeviceCount,
        });
      });
    }, [getDeviceCount, getFeatures, setState]);

    // return { };
  },

  useInitAllServices({ getFeatures, setState }) {
    useEffect(() => {
      getFeatures().then((features) => {
        setState({ features });
      });
    }, [getFeatures, setState]);
  },

};
