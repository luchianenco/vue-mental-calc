<template>
  <v-layout row wrap>
    <v-flex xs12 align="center">
      <v-card>
        <v-card-text>{{elementsDisplay.one}} {{operationDisplay}} {{elementsDisplay.two}} = {{elementsDisplay.result}}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'game-display',
  data () {
    return {
    }
  },
  props: ['settings', 'elementsDisplay', 'operationDisplay']
}
</script>

<style scoped>

</style>
