import { useDocumentVisibility } from "@vueuse/core";
import {watch} from 'vue'

export const useDocumentVisible=(cb:Function)=>{
  const visibility=useDocumentVisibility();
  watch(()=>visibility.value,()=>{
    if(visibility.value==='visible'){
      cb()
    }
  })

  if(cb) cb()
}