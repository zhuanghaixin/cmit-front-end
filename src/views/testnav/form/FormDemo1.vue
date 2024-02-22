<template>
  <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
    @finish="onFinish" @finishFailed="onFinishFailed">
    <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
      <a-input v-model:value="formState.username" @change="changeXXX" />
    </a-form-item>

    <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
      <a-input-password v-model:value="formState.password" @change="changeXXX" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { debounce, pickBy, identity, forIn } from 'lodash-es';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = ref<FormState>({
  username: '',
  password: '',
  remember: true,
});

var xx = {

}
console.log(pickBy(xx, identity))
let newFormValue = pickBy(xx, identity)
let queryList: any = []
for (const [key, value] of Object.entries(newFormValue)) {
  console.log('value', value, 'key', key)
  if (key === 'status') {
    queryList.push({
      field: key,
      rule: 'eq',
      val: value
    })
  } else {
    queryList.push({
      field: key,
      rule: 'like',
      val: value
    })
  }
}

console.log('queryList--', queryList)
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const changeXXX = debounce((e: any) => {
  console.log(e)
  console.log(formState.value)
}, 500)

</script>

<style scoped></style>