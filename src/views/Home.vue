<template>
  <div>
    <div class="header">
      <div
      class="header__game"
      @click.once="onStartClick"
      >
        Играть
      </div>
      <div class="header__score">
        | Рекорды |
      </div>
     <Modal
     v-show="this.$store.state.returnValueCards.length === 10 ? showModal = true : false"
     />
      <Timer ref="timer"/>
    </div>
    <div class="header__btn_center">
      <button
      v-show="showCard === true"
      class="header__btn btn"
      type="button"
      @click="onRestartClick"
      >
        Новая Игра
      </button>
    </div>
    <div class="game__fone">
      <div class="card__wrapper">
        <Card
        v-show="showCard === true"
        v-for="(cardsItem, index) in cards" :key="index"
        :cards="cards"
        :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Timer from '@/components/Game/Timer'
import Card from '@/components/Game/Card'
import Modal from '@/components/Game/Modal'
export default {
  components: {
    Timer,
    Card,
    Modal
  },
  data() {
    return {
      cards: [
        'backpack',
        'blackboard',
        'books',
        'calculator',
        'dictionary',
        'globe',
        'math',
        'mortarboard',
        'palette',
        'science',
      ],
      showModal: false,
      showCard: false
    }
  },
  methods: {
    onStartClick() {
      this.$refs.timer.startTimer()
      this.shuffle()
      this.showCard = true
    },
    onRestartClick() {
      this.$refs.timer.restartTimer()
      this.shuffle()
    },
    shuffle() {
      this.cards.sort(()=>Math.random()-0.5)
    }
  },
    mounted() {
      this.cards.push(...this.cards)
  }
}
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.header__score {
    margin-right: 3px;
    margin-left: 3px;
}

.header__game {
  color: teal;
  cursor: pointer;
}

.header__btn_center {
  text-align: center;
  margin-top: 5px;
}

.btn {
  padding: 5px 12px;
  cursor: pointer;
  margin-top: 15px;
}

.game__fone {
  margin: auto;
  margin-top: 20px;
  max-width: 780px;
}

.card__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>
