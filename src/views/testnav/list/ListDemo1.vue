<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane v-for="item in state.list" :key="item.id" tab="Tab 1">
      我是{{ item.name }}，今年{{ item.age }}
    </a-tab-pane>

    <template #renderTabBar>
      <div class="ant-tabs-nav-wrap">
        <div class="ant-tabs-nav-list" style="transform: translate(0px, 0px)">
          <draggable v-model="state.list" item-key="id">
            <template #item="{ element }">
              <div class="ant-tabs-tab" :class="{ 'ant-tabs-tab-active': activeKey === element.id }"
                @click="activeKey = element.id">
                <div role="tab" aria-selected="true" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-12-tab-1"
                  aria-controls="rc-tabs-12-panel-1">
                  {{ element.name }}
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </template>
  </a-tabs>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import draggable from 'vuedraggable'

const activeKey = ref<number>(0)

const state = reactive({
  list: [
    {
      id: 0,
      name: '张三',
      age: 18
    },
    {
      id: 1,
      name: '李四',
      age: 20
    },
    {
      id: 2,
      name: '王五',
      age: 24
    }
  ]
})
</script>
 