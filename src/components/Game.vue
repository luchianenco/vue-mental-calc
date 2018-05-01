<template>
  <v-app>
    <div class="box">
      <h1>{{title}}</h1>
      <div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs4>
              <v-btn :to="{path: '/'}">
                <v-icon left dark>cancel</v-icon>
                Cancel
              </v-btn>
            </v-flex>
            <v-flex xs4>&nbsp;</v-flex>
            <v-flex xs4>
              <timer :duration="settings.duration.value"/>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <game-display/>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <game-keyboard/>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script>
import Timer from './Timer';
import GameDisplay from './GameDisplay';
import GameKeyboard from './GameKeyboard'

export default {
  name: 'Game',
  data () {
    return {
      title: 'Game Page'
    }
  },
  props: ['settings'],
  components: {
    Timer,
    GameDisplay,
    GameKeyboard
  }
}
</script>
<style scoped>
  .box {
    margin: 10px;
  }
</style>
