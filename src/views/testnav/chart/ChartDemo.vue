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
import { data as demo } from './demo.js'

const option: EChartsOption = {
  color: ['#87dde1', '#E30022', '#FF4500', '#FFF44F', '#1E90FF'],   // 调色颜色列表
  // toolbox:{
  //   feature:{
  //     saveAsImage:{}
  //   }
  // },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {    // 图例组件  
    selectedMode: 'single',
    right: 10,  // 位置
    top: 0,

  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: []
  },
  series: [
    {
      name: '重大风险单位',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: '较大风险单位',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: '一般风险单位',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: '低风险单位',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: '全部',
      type: 'bar',
      // stack: 'total',
      barWidth: 20,
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    // {
    //   name: '全部',
    //   type: 'bar',
    //   stack: 'total',
    //   barWidth: 20,
    //   label: {
    //     show: true
    //   },
    //   emphasis: {
    //     focus: 'series'
    //   },
    //   data: []
    // },
  ]
};
function fetchData(): Promise<any> {
  return new Promise((resolve, reject) => {
    // 模拟异步获取数据
    setTimeout(() => {
      const data = demo
      resolve(data); // 成功获取数据后，调用 resolve 并传递数据
    }, 500); // 延迟1秒钟
  });
}

// async function getData() {
//   try {
//     const data = await fetchData(); // 等待获取数据
//     console.log(data); // 在获取到数据后进行操作
//     return data
//   } catch (error) {
//     console.error(error); // 处理错误
//   }
// }


const init = async () => {
  const res = await fetchData(); // 调用函数开始获取数据
  console.log('res==', res)
  const { enterpriseRiskVO } = res.data;
  console.log(enterpriseRiskVO)
  if (!enterpriseRiskVO) {
    option.series = (option.series as any[]).map((ele) => {
      if (ele.name == '重大风险单位') {
        ele.data.push(0)
      }
      if (ele.name == '较大风险单位') {
        ele.data.push(0)
      }
      if (ele.name == '一般风险单位') {
        ele.data.push(0)
      }
      if (ele.name == '低风险单位') {
        ele.data.push(0)
      }
      // if (ele.name == '全部') {
      //   ele.data.push(0)
      // }


      return ele

    })
  }
  enterpriseRiskVO.dataList.forEach((v) => {
    // @ts-ignore
    option.yAxis.data.push(v.businessName)

    option.series = (option.series as any[]).map((ele) => {
      if (ele.name == '重大风险单位') {
        ele.data.push(v.greatRiskCount)
      }
      if (ele.name == '较大风险单位') {
        ele.data.push(v.largerRiskCount)
      }
      if (ele.name == '一般风险单位') {
        ele.data.push(v.commonRiskCount)
      }
      if (ele.name == '低风险单位') {
        ele.data.push(v.lowRiskCount)
      }
      if (ele.name == '全部') {
        ele.data.push(v.totalCount)
      }
      return ele
    })
  })
  setOptions(option, false)
}


onMounted(() => {
  init()
})
</script>

<style scoped></style>