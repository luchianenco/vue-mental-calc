<template>
  <div id="app">
    <router-view
      v-bind:lastResult="state.lastResult"
      v-bind:totalPrecision="state.totalPrecision"
      v-bind:settings="state.settings"
    />
  </div>
</template>

<script>
const state = {
  lastResult: {
    resolved: 0,
    total: 10
  },
  totalPrecision: 0,
  settings: {
    duration: {
      value: 7,
      options: {
        min: 1,
        max: 15,
        thumbLabel: true
      }
    },
    complexity: {
      value: 5,
      options: {
        min: 1,
        max: 10,
        thumbLabel: true
      }
    },
    operations: {
      sum: true,
      difference: true,
      multiplication: false,
      division: false,
      exponent: false
    }
  }
}

export default {
  name: 'App',
  data () {
    return {
      state: state
    }
  }
}
</script>
