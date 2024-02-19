import type { App } from 'vue'
import { Button } from './Button'
import { Input, Layout } from 'ant-design-vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'ant-design-vue/dist/antd.css';
import Antd from "ant-design-vue";


export function registerGlobComp(app: App) {
  app.use(Input).use(Button).use(Layout);
  app.use(VXETable);
  app.use(Antd)
  app.use(Vant)

}
