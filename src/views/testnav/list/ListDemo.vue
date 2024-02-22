<template>
  <div>
    <Tabs v-model:activeKey="activeKey" :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }">
      <TabPane key="1" tab="我的待办">
        <div class="bg-white h-15 flex items-center">
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
                <div class="bg-white flex flex-col w-full py-3 px-4">
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
      <TabPane key="2" tab="我的待阅" force-render>
        <div class="bg-white  h-15 flex items-center">
          <RadioGroup v-model:value="value2">
            <RadioButton value="a">全部</RadioButton>
            <RadioButton value="b">待阅</RadioButton>
            <RadioButton value="c">已阅</RadioButton>
          </RadioGroup>
        </div>
        <div class="item-list">
          <List item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <ListItem>
                <div class="bg-white flex flex-col w-full py-3 px-4">
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
      <TabPane key="3" tab="我发起的">
        <div class="bg-white  h-15 flex items-center">
          <RadioGroup v-model:value="value3">
            <RadioButton value="a">全部</RadioButton>
            <RadioButton value="b">进行中</RadioButton>
            <RadioButton value="c">已办结</RadioButton>
          </RadioGroup>
        </div>
        <div class="item-list">
          <List item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <ListItem>
                <div class="bg-white flex flex-col w-full py-3 px-4">
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
const value2 = ref<string>('a')
const value3 = ref<string>('a')

interface DataItemFull {
  title: string
}

type DataItem = Partial<DataItemFull>
// interface DataItem {
//   title: string;
// }
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
<style>
html {
  font-size: 12px;
}
</style>
<style scoped>
.item-list :deep(.ant-list-item) {
  padding: 0.25rem 0.75rem;
}

:deep .item-list {
  margin-top: 0.25rem;
}

:deep .ant-tabs-nav {
  background: white;
  ;
}

:deep .ant-tabs>.ant-tabs-nav {
  margin: 0;
}

:deep .ant-radio-button-wrapper {
  border: 1px solid transparent !important;
  /* width: 5.5rem; */
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
  margin: 0 1rem;
  border-radius: 13px;
}

:deep .ant-radio-button-wrapper-checked {
  border-radius: 13px;
  opacity: 1;
  background: rgba(31, 148, 233, 0.1);

}

:deep .ant-radio-button-wrapper:not(:first-child)::before {
  display: none;
}
</style>