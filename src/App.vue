<template>
  <div id="app">
    <router-view
      v-bind:lastResult="state.lastResult"
      v-bind:totalPrecision="state.totalPrecision"
      v-bind:settings="state.settings"
      @game-end="gameEnd"
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
  precisions: [],
  settings: {
    equations: {
      total: 10,
      current: 1,
      resolved: 0
    },
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
      strategy: {
        1: {
          min: 1,
          max: 10
        },
        2: {
          min: 1,
          max: 30
        },
        3: {
          min: 10,
          max: 50
        },
        4: {
          min: 50,
          max: 100
        },
        5: {
          min: 100,
          max: 500
        }
      },
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
  },
  methods: {
    gameEnd () {
      this.state.lastResult.resolved = this.state.settings.equations.resolved
      const precision = (this.state.settings.equations.resolved / this.state.settings.equations.total).toFixed(2)
      this.state.precisions.push(parseFloat(precision))
      const precisionsSum = this.state.precisions.reduce((total, value) => total + value)
      if (this.state.precisions.length !== 0) {
        this.state.totalPrecision = (precisionsSum / this.state.precisions.length).toFixed(2) * 100
      }
      this.state.settings.equations = {
        total: 10,
        current: 1,
        resolved: 0
      }

      this.$router.push('/')
    }
  }
}
</script>
