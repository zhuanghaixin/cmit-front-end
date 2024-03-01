<template>
  <Row style="height: 100%" :gutter="16">
    <Col :span="24">
    <div style="width: 100%; height: 100%" ref="chartRef"></div>
    </Col>
  </Row>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'
import { Row, Col } from 'ant-design-vue'
import { EChartsOption } from 'echarts';
import { useECharts } from '/@/hooks/web/useECharts';
const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

const options: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4]
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9]
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1]
    }
  ]
};

const init = () => {
  setOptions(options, false)
}


onMounted(() => {
  init()
})
</script>

<style scoped></style>