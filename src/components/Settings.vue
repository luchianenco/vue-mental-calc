<script>
  export default {
    name: 'Settings',
    data () {
      return {
        title: 'Settings',
        settings: {
          duration: {
            min: 1,
            max: 10,
            default: 5
          },
          mode: {
            min: 1,
            max: 10,
            default: 5
          },
          operations: {
            sum: true,
            division: true,
            difference: false,
            multiplication: false,
            power: false
          }
        }
      }
    }
  }
</script>
