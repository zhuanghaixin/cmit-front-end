<template>
  <div>
    <Tabs v-model:activeKey="activeKey" :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }">
      <TabPane key="1" tab="我的待办">
        <div>
          <RadioGroup v-model:value="value1">
            <RadioButton value="a">全部</RadioButton>
            <RadioButton value="b">待办</RadioButton>
            <RadioButton value="c">已办</RadioButton>
          </RadioGroup>
        </div>
        <div class="item-list">
          <List item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <ListItem>
                <div class="bg-white flex flex-col w-full">
                  <div>
                    <Tag color="rgba(31, 148, 233, 0.1)"><span class="text-primary">我的课程</span></Tag>
                    <span class="text-xl">{{ item.title }}</span>
                  </div>
                  <div class="flex">
                    <div class="basis-1/2">当前环节：{{ item.title }}</div>
                    <div class="basis-1/2">当前处理人：{{ item.title }}</div>
                  </div>
                  <div class="">
                    到达时间：{{ item.title }}
                  </div>
                </div>


              </ListItem>
            </template>
          </List>
        </div>
      </TabPane>
      <TabPane key=" 2" tab="Tab 2" force-render>Content of Tab Pane 2
      </TabPane>
      <TabPane key="3" tab="Tab 3">Content of Tab Pane 3</TabPane>
      <!-- 自定义表头部分 -->
      <template #renderTabBar>
        <div>
          12345
        </div>
        <div>
          3434
        </div>
        <div>
          rtrt
        </div>
        <!-- 自定义内容 -->
      </template>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import {
  Tabs,
  TabPane,
  RadioGroup,
  RadioButton,
  List,
  ListItem,
  ListItemMeta,
  Avatar,
  Tag

} from 'ant-design-vue'
import { ref } from 'vue'
const activeKey = ref('1');
const value1 = ref<string>('a')
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: '休闲鞋',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

</script>

<style scoped>
.item-list :deep(.ant-list-item) {
  padding: 4px 0;
}
</style>