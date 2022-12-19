<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import callAPI from '../core/api/callAPI'
  import commonHooks from '../core/hooks/commonHooks'
  import { GET_SAMPLE_DATA, SAMPLE_DATA } from '../core/store/storeSample/type'
  const { storeGetters,storeDispatch } = commonHooks('storeSample')

  const sampleData = computed(()=>storeGetters(GET_SAMPLE_DATA))
  const input = ref()
  onMounted(() => {
    callAPI.getAPI('get', '/service')
  })
</script>

<template>
  <div >
    <p>{{sampleData}}</p>
  </div>
  

  <input type="text">
</template>

<style lang="scss" scoped>
</style>
