<template>
  <v-app>
    <div class="box">
      <h1>{{title}}</h1>
      <div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs2>
              <v-btn :to="{path: '/'}" aling="left" class="cancelButtonPosition">
                <v-icon left dark>cancel</v-icon>
                Cancel
              </v-btn>
            </v-flex>
            <v-flex xs6>&nbsp;</v-flex>
            <v-flex xs4>
              <timer :duration="settings.duration.value" @time-out="onTimeOut"/>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <game-display :elementsDisplay="elementsDisplay" :operationDisplay="operationDisplay" />
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <game-keyboard
                :elementsDisplay="elementsDisplay"
                :elementsDisplayHiddenKey="elementsDisplayHiddenKey"
                @submitted-value="onSubmittedValue"
              />
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              Equation {{settings.equations.current}} from {{settings.equations.total}}.<br />
              Correctly resolved: {{settings.equations.resolved}}
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script>
import Timer from './Timer'
import GameDisplay from './GameDisplay'
import GameKeyboard from './GameKeyboard'

export default {
  name: 'Game',
  data () {
    return {
      title: 'Game Page',
      operationDisplay: '',
      elementsDisplayHiddenKey: 'result',
      elementsDisplay: {
        one: '',
        two: '',
        result: ''
      },
      elementsValues: {
        one: 0,
        two: 0,
        result: 0
      }
    }
  },
  methods: {
    onSubmittedValue (value) {
      if (this.settings.equations.current > 10) {
        return
      }
      value = parseInt(value, 10)
      const submittedValue = parseInt(this.elementsValues[this.elementsDisplayHiddenKey], 10)
      if (submittedValue === value) {
        this.settings.equations.resolved++
      }
      this.settings.equations.current++
      if (this.settings.equations.current > 10) {
        this.$emit('game-end')
        return
      }
      if (this.settings.equations.current <= 10) {
        this.generateEquation()
      }
    },
    onTimeOut () {
      this.$emit('game-end')
    },
    defineEquationElements (strategy, operation) {
      this.elementsValues.one = Math.floor(Math.random() * strategy.min) + 1
      this.elementsValues.two = Math.floor(Math.random() * strategy.max) + 1
      switch (operation) {
        case 'sum': {
          this.elementsValues.result = this.operationSum(this.elementsValues.one, this.elementsValues.two)
          this.operationDisplay = '+'
          break
        }
        case 'difference': {
          this.elementsValues.result = this.operationDifference(this.elementsValues.one, this.elementsValues.two)
          this.operationDisplay = '-'
          break
        }
        case 'multiplication': {
          this.elementsValues.result = this.operationMultiplication(this.elementsValues.one, this.elementsValues.two)
          this.operationDisplay = '*'
          break
        }
        case 'division': {
          this.elementsValues.result = this.operationDivision(this.elementsValues.one, this.elementsValues.two)
          this.operationDisplay = '/'
          break
        }
        case 'exponent': {
          this.elementsValues.result = this.operationExp(this.elementsValues.one, this.elementsValues.two)
          this.operationDisplay = '^'
          break
        }
        default: {
          throw new Error('No operation found for key ' + operation)
        }
      }
    },

    defineDisplay () {
      const keys = Object.keys(this.elementsDisplay)
      const hideElementNumber = Math.floor(Math.random() * keys.length)
      const hideElementName = keys[hideElementNumber]
      this.elementsDisplay.one = this.elementsValues.one.toString()
      this.elementsDisplay.two = this.elementsValues.two.toString()
      this.elementsDisplay.result = this.elementsValues.result.toString()
      this.elementsDisplayHiddenKey = hideElementName
      this.elementsDisplay[hideElementName] = '??'
    },

    generateEquation () {
      const complexity = this.settings.complexity
      const complexityValue = this.settings.complexity.value
      const strategy = complexity.strategy[complexityValue]
      const operations = Object.keys(this.settings.operations).filter(key => this.settings.operations[key] === true)
      const selectedOperation = this.defineOperation(operations)
      this.defineEquationElements(strategy, selectedOperation)
      this.defineDisplay()
    },
    defineOperation (operations) {
      const key = Math.floor(Math.random() * operations.length)
      return operations[key]
    },
    operationSum (value1, value2) {
      return value1 + value2
    },
    operationDifference (value1, value2) {
      return value1 - value2
    },
    operationMultiplication (value1, value2) {
      return value1 * value2
    },
    operationDivision (value1, value2) {
      if (value2 === 0) {
        throw new Error('Division by zero not allowed')
      }

      return value1 / value2
    },

    operationExp (value1, value2) {
      return Math.pow(value1, value2)
    }
  },
  props: ['settings'],
  components: {
    Timer,
    GameDisplay,
    GameKeyboard
  },
  mounted: function () {
    this.generateEquation()
  }
}
</script>
<style scoped>
  .box {
    margin: 10px;
  }
  .cancelButtonPosition {
    left: -8px;
  }
</style>
