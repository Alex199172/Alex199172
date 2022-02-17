<template>
  <div class="modal__wrapper" v-if="showModal==true">
    <div class="modal__substrate">
    <div class="modal">
      <div class="modal__header">
        <button
        type="button"
        class="modal__close"
        @click="showModal = !showModal"
        >
          &times;
        </button>
      </div>
      <div class="modal__content">
        <span>You Won!</span><br>
        Введите ваше имя
      </div>
      <div class="modal__input">
        <input type="text"
        v-model="name"
        >
      </div>
      <div class="modal__btn_center">
        <button
        type="button"
        class="btn"
        @click="getName"
        >
          Записать результат
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showModal: true,
        name: '',
        result: []
      }
    },
    methods: {
      getName() {
        if(this.name != '') {
          this.result.push(this.name)
          this.showModal = false
        }
      }
    }
  }
</script>

<style>
  .modal__wrapper {

  }

  .modal__substrate {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.9);
  }

  .modal {
    position: fixed;
    top: 30%;
    right: 40%;
    width: 400px;
    height: 250px;
    background: #fff;
    margin: auto;
    border-radius: 10px;
  }

  .modal__close {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 24px;
  }

  .btn {
    border: none;
    font-size: 17px;
    padding: 10px 15px;
    border-radius: 5px;
    color: #fff;
    background: linear-gradient(to right, #67b26f, #4ca2cd);
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.8;
    transition: 0.6s;
  }

  .modal__btn_center {
    text-align: center;
  }

  .modal__header {
    text-align: right;
    padding: 5px;
  }

  .modal__content {
    text-align: center;
    font-size: 24px;
    color: teal;
  }

  .modal__input {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  input {
    width: 240px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid;
  }

  input:focus {
    outline-color: teal;
  }

</style>
