import React from 'react'
import { Tabs } from 'antd'
import Favorite from './TabElements/Favorite';
import SavedForLater from './TabElements/SavedForLater';

const { TabPane } = Tabs;

const CartTabs = () => {
  return (
    <section>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Saved for later" key="1">
          <SavedForLater/>
        </TabPane>
        <TabPane tab="Favorite" key="2">
        <Favorite/>
        </TabPane>
      </Tabs>
    </section>
  )
}

export default CartTabs
