<template>
  <div class="card__container"
  @click="compaireCard"
  >
    <div class="card__front card center"
    :class="$store.state.card__front_active === true ? 'card__front_active' : ''"
    >
        <img :src="`/assets/img/logo.png`">
    </div>
    <div class="card__back card"
    :class="$store.state.card__back_active === true ? 'card__back_active' : ''"
    >
        <img class="card__img" :src="`/assets/img/${cards[index]}.png`">
    </div>
  </div>
</template>

<script>

export default {
  props:['cards', 'index'],
  data() {
    return {

    }
  },
  methods: {
    // turnCard() {
    //     this.classActive.card__front_active = true
    //     this.classActive.card__back_active = true
    //   },
    // returnCard() {
    //     this.classActive.card__front_active = false
    //     this.classActive.card__back_active = false
    //
    //     this.$store.commit('removeValueCard')
    //   },
    compaireCard() {
      if(this.$store.state.valueCards.length < 2 ) {
        this.$store.commit('turnCard')
        this.$store.commit('addValueCard', this.cards[this.index])
      }

      if(this.$store.state.valueCards.length === 1 ) {
        this.$store.commit('startLongTimeout', this.returnCard)
      }

      if(this.$store.state.valueCards.length === 2 && this.$store.state.valueCards[0] != this.$store.state.valueCards[1]) {
         this.$store.commit('startShortTimeout', this.returnCard)

      }

      if(this.$store.state.valueCards.length === 2 && this.$store.state.valueCards[0] == this.$store.state.valueCards[1]) {
         this.$store.commit('stopLongTimeout')
         this.$store.commit('stopShortTimeout')
         this.$store.commit('removeValueCard')
         this.$store.commit('addReturnValueCard', this.cards[this.index])
      }

    console.log(this.longTimeout)
    console.log(this.shortTimeout)
    console.log(this.$store.state.valueCards)
    console.log(this.$store.state.returnValueCards)
   }
  }
}

</script>

<style>
  .card {
    width: 135px;
    height: 205px;
    background: linear-gradient(to right, #67b26f, #4ca2cd);
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  }

  .card__img {
    margin-top: 30px;
  }

  .card__back {
    background: #f5f5f5;
  }

  .center {
    position: absolute;
    transform: transition(-50%, -50%)
  }

  .card__front, .card__back {
    overflow: hidden;
    backface-visibility: hidden;
    transition: transform 0.6s linear;
  }

  .card__front {
    transform: perspective(600px) rotateY(0deg);
  }

  .card__back {
    transform: perspective(600px) rotateY(180deg);
  }

  .card__front_active {
    transform: perspective(600px) rotateY(-180deg);
  }

  .card__back_active {
    transform: perspective(600px) rotateY(0deg);
  }

  .card__hiden {
    visibility: hidden;
  }

</style>
