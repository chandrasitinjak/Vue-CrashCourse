<template>
  <button @click="increment">{{ count }}</button>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <div v-for="msg in history">
    {{ msg }}
  </div>
</template>

<script>
import { useNumbers } from "./number";

export default {
  setup() {
    const {
      increment,
      count,
      history,
      // increase,
      // numbers,
      // total,
      a,
      b,
    } = useNumbers();

    return {
      increment,
      count,
      history,
      // increase,
      // numbers,
      // total,
      a,
      b,
    };

    //complex
    // const numbers = reactive({
    //     a: 0,
    //     b: 0
    // })

    // const increase = (num) => {
    //     numbers[num] += 1;
    // }

    // const total = computed(() => {
    //     return count.value + numbers.a + numbers.b
    // })

    // watch(numbers, (newValue) => {
    //     console.log(newValue.a, newValue.b)
    // }, {
    //     immediate: true
    // })

    // watchEffect(() => {
    //     console.log(numbers.a)
    // })

    // watch(numbers, (newVal, oldVal) => {
    //     console.log(newVal.a, oldVal.a)
    // })
  },
};
</script>
