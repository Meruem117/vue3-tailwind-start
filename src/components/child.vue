<template>
  <div>
    <h3>{{n}}</h3>
    <h3>{{m}}</h3>

    <h3>msg: {{msg}}</h3>
    <h3>msg2: {{$attrs.msg2}}</h3>

    <slot name="xxx"></slot>

    <button @click="update">更新</button>
  </div>
</template>

<script lang="ts">

import {
  ref,
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'child',

  props: ['msg'],

  emits: ['fn1','fn2'], // 可选的, 声明了更利于程序员阅读, 且可以对分发的事件数据进行校验

  // setup (props, context) {
  setup (props, {attrs, emit, slots}) {

    console.log('setup', this)
    console.log(props.msg, attrs.msg2, slots, emit)

    const m = ref(2)
    const n = ref(3)

    function update () {

      m.value += 2
      n.value += 2

      // 分发自定义事件
      emit('fn1', '+')
      emit('fn2',12123)
    }

    return {
      m,
      n,
      update,
    }
  },
})
</script>