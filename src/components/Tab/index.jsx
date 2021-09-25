import { Tab } from '@alifd/meet';
import { createICComponent } from '@/common/component-util';

import './index.styl';

const CTab = createCComponent(
  Tab,
  'ic-tab-panel',
);

export const CTabItem = Tab.Item;

export default CTab;
