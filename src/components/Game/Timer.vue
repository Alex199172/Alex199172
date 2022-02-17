<template>
  <div class="header__second">
    <strong>{{hour}}:{{min}}:{{sec}}</strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sec: '00',
      min: '00',
      hour: '00',
      star: null
    }
  },
  methods: {
    startTimer() {
      this.start = setTimeout(this.addSec, 1000)
    },
    restartTimer() {
       clearTimeout(this.start)
        this.sec= '00',
        this.min= '00',
        this.hour= '00'
        this.startTimer()
     },
    addSec() {
      this.sec++
        if(this.sec <= 9) {
           this.sec = '0' + this.sec
        }
        if(this.sec > 60) {
          this.sec = 0
          this.min++
        }
        if(this.min > 60) {
          this.min = 0
          this.hour++
        }
      this.startTimer()
    }
  }
}
</script>

<style>

</style>
