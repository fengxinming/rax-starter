import { Tab } from '@alifd/meet';
import { createCComponent } from '@/common/component-util';

import './index.styl';

const CTab = createCComponent(
  Tab,
  'c-tab',
);

export const CTabItem = Tab.Item;

export default CTab;
