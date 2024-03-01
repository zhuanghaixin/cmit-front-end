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
  color: ['#f00', '#ff0', '#00f'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    // formatter: function (params) {
    //   console.log('params: ', params)
    //   let html = '';
    //   const xAxisValue = params[0].axisValue;
    //   html += xAxisValue + '<br/>';
    //   params.forEach(function (item) {
    //     html += item.marker + item.seriesName + ' : ' + item.data + '<br/>';
    //   });
    //   return html;
    // }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Series 1',
      type: 'bar',
      stack: 'total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Series 2',
      type: 'bar',
      stack: 'total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Series 3',
      type: 'bar',
      stack: 'total',
      data: [150, 232, 201, 154, 190, 330, 410]
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