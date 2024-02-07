<template>
  <div>
    <!-- <div v-for="(item, index) in dataRef" :key="index">
      <div class="" v-html="renderHtml(item)"></div>
    </div> -->
    <!-- <div class="render-content">
      <p><span style="font-size: 14px; font-family: 微软雅黑;">尊敬的用户：</span></p>
      <p><span
          style="font-size: 14px; font-family: 微软雅黑;">您好！非常感谢您一直以来对SMIS系统的支持与信任。春节假期即将到来，为了更好地为您提供服务，我们安排了春节值班工作，详情如下：</span>
      </p>
      <table style="width: auto;">
        <tbody>
          <tr>
            <th colSpan="1" rowSpan="2" width="auto"><span style="font-size: 14px; font-family: 微软雅黑;">序号</span>
            </th>
            <th colSpan="1" rowSpan="2" width="78"><span style="font-size: 14px; font-family: 微软雅黑;">值班时间</span>
            </th>
            <th colSpan="1" rowSpan="2" width="96"><span style="font-size: 14px; font-family: 微软雅黑;">姓名</span>
            </th>
            <th colSpan="1" rowSpan="2" width="578"><span style="font-size: 14px; font-family: 微软雅黑;">职责说明</span>
            </th>
            <th colSpan="1" rowSpan="2" width="202.26"><span style="font-size: 14px; font-family: 微软雅黑;">值班联系顺序</span>
            </th>
          </tr>
          <tr></tr>
          <tr>
            <td colSpan="1" rowSpan="1" width="auto"><span style="font-size: 14px; font-family: 微软雅黑;">1</span>
            </td>
            <td colSpan="1" rowSpan="1" width="78"><span style="font-size: 14px; font-family: 微软雅黑;">|
                10-18号</span></td>
            <td colSpan="1" rowSpan="1" width="63"><span style="font-size: 14px; font-family: 微软雅黑;">| 马晓文</span>
            </td>
            <td colSpan="1" rowSpan="1" width="140"><span style="font-size: 14px; font-family: 微软雅黑;">|
                作为乙方项目经理，负项目进度及服务质量主要责任，紧急故障事件第一联系人。</span></td>
            <td colSpan="1" rowSpan="1" width="85"><span style="font-size: 14px; font-family: 微软雅黑;">|
                紧急联系人（18813973404）</span></td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" width="auto"><span style="font-size: 14px; font-family: 微软雅黑;">2</span>
            </td>
            <td colSpan="1" rowSpan="1" width="78"><span style="font-size: 14px; font-family: 微软雅黑;">|
                10-12号</span></td>
            <td colSpan="1" rowSpan="1" width="63"><span style="font-size: 14px; font-family: 微软雅黑;">| 顾珺瑶</span>
            </td>
            <td colSpan="1" rowSpan="1" width="140"><span style="font-size: 14px; font-family: 微软雅黑;">|
                紧急故障事件第二联系人，需求及项目管理人员，咨询顾问。</span></td>
            <td colSpan="1" rowSpan="1" width="85"><span style="font-size: 14px; font-family: 微软雅黑;">|
                紧急联系人（13951383252）</span></td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" width="auto"><span style="font-size: 14px; font-family: 微软雅黑;">3</span>
            </td>
            <td colSpan="1" rowSpan="1" width="78"><span style="font-size: 14px; font-family: 微软雅黑;">|
                10-12号</span></td>
            <td colSpan="1" rowSpan="1" width="63"><span style="font-size: 14px; font-family: 微软雅黑;">| 王俊杰</span>
            </td>
            <td colSpan="1" rowSpan="1" width="140"><span style="font-size: 14px; font-family: 微软雅黑;">|
                运维问题处理反馈，主要为后端开发。同时支持需求优化研发工作。</span></td>
            <td colSpan="1" rowSpan="1" width="85"><span style="font-size: 14px; font-family: 微软雅黑;">|
                18824669775</span></td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" width="auto"><span style="font-size: 14px; font-family: 微软雅黑;">4</span>
            </td>
            <td colSpan="1" rowSpan="1" width="78"><span style="font-size: 14px; font-family: 微软雅黑;">|
                13-15号</span></td>
            <td colSpan="1" rowSpan="1" width="63"><span style="font-size: 14px; font-family: 微软雅黑;">| 张夏威</span>
            </td>
            <td colSpan="1" rowSpan="1" width="140"><span style="font-size: 14px; font-family: 微软雅黑;">|
                常态化技术负责人，运维问题处理反馈，主要为前端开发。同时支持需求优化研发工作。</span></td>
            <td colSpan="1" rowSpan="1" width="85"><span style="font-size: 14px; font-family: 微软雅黑;">|
                13570831577</span></td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" width="auto"><span style="font-size: 14px; font-family: 微软雅黑;">5</span>
            </td>
            <td colSpan="1" rowSpan="1" width="78"><span style="font-size: 14px; font-family: 微软雅黑;">|
                13-15号</span></td>
            <td colSpan="1" rowSpan="1" width="63"><span style="font-size: 14px; font-family: 微软雅黑;">| 周至</span>
            </td>
            <td colSpan="1" rowSpan="1" width="140"><span style="font-size: 14px; font-family: 微软雅黑;">|
                运维问题处理反馈，主要为后端开发。同时支持需求优化研发工作。</span></td>
            <td colSpan="1" rowSpan="1" width="85"><span style="font-size: 14px; font-family: 微软雅黑;">|
                13052351561</span></td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" width="auto"><span style="font-size: 14px; font-family: 微软雅黑;">6</span>
            </td>
            <td colSpan="1" rowSpan="1" width="78"><span style="font-size: 14px; font-family: 微软雅黑;">|
                15-18号</span></td>
            <td colSpan="1" rowSpan="1" width="63"><span style="font-size: 14px; font-family: 微软雅黑;">| 张文健</span>
            </td>
            <td colSpan="1" rowSpan="1" width="140"><span style="font-size: 14px; font-family: 微软雅黑;">|
                测试人员、运维事件咨询人员，负责微信群等答疑一线问答。</span></td>
            <td colSpan="1" rowSpan="1" width="85"><span style="font-size: 14px; font-family: 微软雅黑;">|
                13260663213</span></td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" width="auto"><span style="font-size: 14px; font-family: 微软雅黑;">7</span>
            </td>
            <td colSpan="1" rowSpan="1" width="78"><span style="font-size: 14px; font-family: 微软雅黑;">|
                15-18号</span></td>
            <td colSpan="1" rowSpan="1" width="63"><span style="font-size: 14px; font-family: 微软雅黑;">| 阮思兰</span>
            </td>
            <td colSpan="1" rowSpan="1" width="140"><span style="font-size: 14px; font-family: 微软雅黑;">|
                运维问题处理反馈，主要为前端开发。同时支持需求优化研发工作。</span></td>
            <td colSpan="1" rowSpan="1" width="85"><span style="font-size: 14px; font-family: 微软雅黑;">|
                18216302375</span></td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" width="auto"><span style="font-size: 14px; font-family: 微软雅黑;">8</span>
            </td>
            <td colSpan="1" rowSpan="1" width="78"><span style="font-size: 14px; font-family: 微软雅黑;">| 调度人员</span>
            </td>
            <td colSpan="1" rowSpan="1" width="63"><span style="font-size: 14px; font-family: 微软雅黑;">|
                李妙、刘欢</span></td>
            <td colSpan="1" rowSpan="1" width="140"><span style="font-size: 14px; font-family: 微软雅黑;">|
                运维问题处理反馈，假日根据值班人员反馈灵活调度。</span></td>
            <td colSpan="1" rowSpan="1" width="85"><span style="font-size: 14px; font-family: 微软雅黑;">/</span></td>
          </tr>
        </tbody>
      </table>
      <p><span style="font-size: 14px; font-family: 微软雅黑;">感谢您对我们工作的理解与支持。如有任何问题或建议，请随时与我们联系。祝您度过一个愉快、安心的春节假期！</span>
      </p>
      <p><span style="font-size: 14px; font-family: 微软雅黑;">谢谢！</span></p>
      <p><span style="font-size: 14px; font-family: 微软雅黑;">SMIS系统团队 敬上</span></p>
    </div> -->
    <div class="">
      <div class="flex flex-col flex-1  bg-red-200 min-h-[inherit]">
        <div class="render-content">
          <p><span style="background-color: rgb(235, 144, 58);">首页升级啦～</span></p>
          <pre><code >console.log('vvv')</code></pre>
          <p><u>测试嘿嘿BRO</u></p>
          <p><img src="https://smis3-st1.uat.cmhk.com/education/api/v1/file/view/1732594495536500736?" alt="" data-href=""
              style="" /></p>
          <ul>
            <li><u>1111</u></li>
            <li><u>2</u></li>
            <li><u>3</u></li>
            <li><u>4</u></li>
            <li><u>5</u></li>
          </ul>
          <div data-w-e-type="video" data-w-e-is-void>n<video poster="" controls="true" width="400" height="400">
              <source src="https://smis3-st1.uat.cmhk.com/education/api/v1/file/mongo/viewVideo?id=1729309207686082560"
                type="video/mp4" />
            </video>n</div>
          <p><img src="https://smis3-st1.uat.cmhk.com/education/api/v1/file/view/1727660517808467968?" alt="" data-href=""
              style="width: 780.00px;height: 331.92px;" /></p>
        </div>

        <div class="flex justify-around font-sans mt-auto">
          <span>发布人：12133</span>
          <span>日期：xxxx</span>
        </div>
      </div>
    </div>



  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { testRes } from './demo.js'
const dataRef = ref('')
dataRef.value = testRes.data
const renderHtml = computed((item) => {
  return (item) => {
    console.log('item.noticeContent', item.noticeContent)
    return item.noticeContent;
  };
})

</script>

<style scoped>
body {
  font-family: "微软雅黑", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

.render-content {

  body {
    font-family: '微软雅黑', sans-serif;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-size: 14px;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  span {
    font-size: 14px;
  }

  /* 自定义样式 */
  p {
    margin: 10px 0;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  table span {
    font-family: '微软雅黑', sans-serif;
  }

  /* 设置段落（<p>）的上下间距和字体大小 */
  /* p {
  margin: 10px 0;
  font-size: 16px;
} */

  /* 设置包裹在 span 元素中的背景颜色和内边距 */
  /* span {
  background-color: rgb(235, 144, 58);
  padding: 5px 10px;
} */

  /* 设置代码块（<pre>）的背景颜色、边框、内边距和字体样式 */
  pre {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    padding: 10px;
    font-family: monospace;
  }

  /* 设置下划线元素（<u>）的文本装饰 */
  u {
    text-decoration: underline;
  }

  /* 设置列表项（<li>）的上下间距和字体样式 */
  li {
    margin: 5px 0;
    font-size: 16px;
  }

  /* 设置视频容器（<div>）的宽度和内边距 */
  div[data-w-e-type="video"] {
    width: 100%;
    padding: 10px 0;
  }

  /* 设置视频（<video>）的最大宽度和内边距 */
  video {
    max-width: 100%;
    padding: 10px 0;
  }

  /* 设置图片（<img>）的最大宽度、边框和内边距 */
  img {
    max-width: 100%;
    border: 1px solid #ccc;
    padding: 10px 0;
  }


}
</style>