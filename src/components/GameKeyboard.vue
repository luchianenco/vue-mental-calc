<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(1)">1</v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(2)">2</v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(3)">3</v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn fab color="gray" v-on:click="clearHiddenElementValue">
            <v-icon dark>clear</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(4)">4</v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(5)">5</v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(6)">6</v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn fab color="gray" v-on:click="toggleValueSign">
            <v-icon dark>remove</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(7)">7</v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(8)">8</v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(9)">9</v-btn>
        </v-flex>
        <v-flex xs3>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs3>&nbsp;</v-flex>
        <v-flex xs3>
          <v-btn fab color="orange" v-on:click="updateElementValue(0)">0</v-btn>
        </v-flex>
        <v-flex xs3>&nbsp;</v-flex>
        <v-flex xs3>
          <v-btn fab color="success" v-on:click="submitValue">
            <v-icon dark>done</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'game-keyboard',
  methods: {
    updateElementValue (number) {
      if (this.elementsDisplay[this.elementsDisplayHiddenKey] !== '??') {
        this.elementsDisplay[this.elementsDisplayHiddenKey] += number.toString()
        return
      }

      this.elementsDisplay[this.elementsDisplayHiddenKey] = number
    },
    clearHiddenElementValue () {
      this.elementsDisplay[this.elementsDisplayHiddenKey] = '??'
    },
    toggleValueSign () {
      if (this.elementsDisplay[this.elementsDisplayHiddenKey] === '??') {
        return
      }

      this.elementsDisplay[this.elementsDisplayHiddenKey] *= -1
    },
    submitValue () {
      this.$emit('submitted-value', this.elementsDisplay[this.elementsDisplayHiddenKey])
    }
  },
  props: ['elementsDisplay', 'elementsDisplayHiddenKey']
}
</script>

<style scoped>

</style>
