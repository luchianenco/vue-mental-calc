<template>
  <v-app>
    <div class="box">
      <h1>{{title}}</h1>
      <div>
        <p>
          Welcome! <br/>
          Your last result - resolved {{lastResult.resolved}} from {{lastResult.total}}.<br/>
          Total Precision - {{totalPrecision}}%
        </p>
      </div>
      <div class="slider-width">
        <div class="align-center">Duration: {{settings.duration.value}}</div>
        <v-slider
          v-model="settings.duration.value"
          v-bind="settings.duration.options"
        ></v-slider>
      </div>
      <div class="slider-width">
        <div class="align-center">Complexity: {{settings.complexity.value}}</div>
        <v-slider
          v-model="settings.complexity.value"
          v-bind="settings.complexity.options"
        ></v-slider>
      </div>
      <div>
        <v-checkbox :label="`Sum`" v-model="settings.operations.sum"></v-checkbox>
      </div>
      <div>
        <v-checkbox :label="`Difference`" v-model="settings.operations.difference"></v-checkbox>
      </div>
      <div class="operation-item">
        <v-checkbox :label="`Multiplication`" v-model="settings.operations.multiplication"></v-checkbox>
      </div>
      <div class="operation-item">
        <v-checkbox :label="`Division`" v-model="settings.operations.division"></v-checkbox>
      </div>
      <div class="operation-item">
        <v-checkbox :label="`Exponentiation`" v-model="settings.operations.exponent"></v-checkbox>
      </div>
      <div>
        <v-btn :to="{path: '/game'}">Play</v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
      title: 'Main Page'
    }
  },
  props: ['lastResult', 'totalPrecision', 'settings']
}
</script>
<style scoped>
  .slider-width {
    width: 30%
  }

  .box {
    margin: 10px;
  }
</style>
