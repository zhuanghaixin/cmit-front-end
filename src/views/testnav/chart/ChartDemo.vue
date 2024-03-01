<template>
  <Row style="height: 100%" :gutter="16">
    <Col :span="24">
    <div style="width: 100%; height: 100%" ref="chartRef" class="chart-demo"></div>
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
import echarts from '/@/utils/lib/echarts'
// let chartInstance: echarts.ECharts
const option: EChartsOption = {
  color: ['#E30022', '#FF4500', '#FFF44F', '#1E90FF'],   // 调色颜色列表
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
    },
    // formatter: function (params) {
    //   console.log('params', params);
    //   let html = '';
    //   const seriesName = params[0].axisValueLabel;
    //   params.forEach(function (item) {
    //     html += item.marker + item.seriesName + ' : ' + item.data + '<br/>';
    //   });
    //   return seriesName + '<br/>' + html;
    // }

  },
  legend: {    // 图例组件  
    // selectedMode: 'single',
    right: 10,  // 位置
    top: 0,
    data: [
      '重大风险单位',
      '较大风险单位',
      '一般风险单位',
      '低风险单位'
    ],
    selected: {
      '重大风险单位': true,
      '较大风险单位': true,
      '一般风险单位': true,
      '低风险单位': true
    }
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
      // emphasis: {
      //   focus: 'series'
      // },
      data: []
    },
    {
      name: '较大风险单位',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      label: {
        show: true
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: []
    },
    {
      name: '一般风险单位',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      label: {
        show: true
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: []
    },
    {
      name: '低风险单位',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      label: {
        show: true
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: []
    },
    // {
    //   name: '全部',
    //   type: 'bar',
    //   // stack: 'total',
    //   barWidth: 20,
    //   label: {
    //     show: false
    //   },
    //   emphasis: {
    //     focus: 'series'
    //   },
    //   data: []
    // },
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
    }, 1000); // 延迟1秒钟
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

    // 将各个businessName下的各个风险单位相加






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
    const result = {};
    console.log('option.series', option.series)
    // sum = arr.reduce((total, currentValue) => total + currentValue);
    // 遍历数据数组
    option.series.forEach(item => {
      const name = item.name;
      // @ts-ignore
      const sum = item.data.reduce((acc, currentValue) => acc + parseInt(currentValue), 0);

      // 将name作为键，sum作为值，添加到结果对象中
      // @ts-ignore
      result[name] = sum;
    });

    // @ts-ignore
    option.legend.formatter = function (name,) {
      return name + ' ' + result[name]
    },

      console.log(result);

  })
  setOptions(option, false)

  let chartInstance: echarts.ECharts
  chartInstance = echarts.init(chartRef.value)
  chartInstance.on("legendselectchanged", function (params) {
    console.log('params', params)
    var selected = params.name;
    // 找到选择是否为true
    var isSelected = params.selected[selected];
    console.log('isSelect', isSelected)
    var option = chartInstance.getOption();
    console.log("option", option);
    let newSelected = {}
    // if (isSelected) {
    if (temp == selected) {
      let someTrue = Object.values(params.selected).some(value => value === true);
      console.log('someTrue', someTrue)
      if (someTrue) {
        newSelected = Object.assign(
          {
            "重大风险单位": false,
            "较大风险单位": false,
            "一般风险单位": false,
            "低风险单位": false,
          },
          {
            [selected]: true,
          }
        )
      } else {
        newSelected =
        {
          "重大风险单位": true,
          "较大风险单位": true,
          "一般风险单位": true,
          "低风险单位": true,
        }
      }



    } else {
      newSelected = Object.assign(
        {
          "重大风险单位": false,
          "较大风险单位": false,
          "一般风险单位": false,
          "低风险单位": false,
        },
        {
          [selected]: true,
        }
      )
    }
    temp = selected
    option.legend[0].selected = newSelected;
    chartInstance.setOption(option);
  });




}


let temp = ''



onMounted(() => {
  init()
  // 监听图例点击事件



})
</script>

<style scoped></style>