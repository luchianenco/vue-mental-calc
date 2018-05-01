<template>
  <v-card>
    <v-card-text>{{timerNow}}</v-card-text>
  </v-card>
</template>

<script>
    export default {
      name: "timer",
      data () {
        return {
          timerNow: '--:--',
          timeStart: 0
        }
      },
      methods: {
        countdownTimer() {
          const intervalId = setInterval(() => {
            this.timeStart--;
            let minutes = parseInt(this.timeStart / 60, 10);
            let seconds = parseInt(this.timeStart % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            this.timerNow = minutes + ':' + seconds;

            if (this.timeStart < 0) {
              clearInterval(intervalId);
              this.timerNow = '00:00';
            }

          }, 1000)
        }
      },
      mounted: function () {
        this.countdownTimer();
        this.timeStart = this.duration * 60;
      },
      props: ['duration']
    }
</script>

