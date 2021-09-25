import CPanel, { CPanelLayout } from '@/components/Panel';
import CSearch from '@/components/Search';
import CTab from '@/components/Tab';
import { createElement, Fragment } from 'rax';
import { defaultActiveKey, tabs } from './scripts';

function Order() {
  return (
    <Fragment>
      <CSearch />
      <CTab
        defaultActiveKey={defaultActiveKey}
        dataSource={tabs}
      />
      <CPanelLayout>
        <CPanel>
          List Item
        </CPanel>

        <CPanel>
          List Item
        </CPanel>

        <CPanel>
          List Item
        </CPanel>

        <CPanel>
          List Item
        </CPanel>
      </CPanelLayout>
    </Fragment>
  );
}

export default Order;
