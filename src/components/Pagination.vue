<template>
  <div class="container">
    <div class="buttons" @click="onNextClicked">بعدی</div>
    <div class="result">{{ "از " + totalPages }}</div>
    <input
      id="input"
      type="number"
      v-model.number="currentPage"
      min="1"
      :max="totalPages"
    />
    <div class="buttons" @click="onPreviousClicked">قبلی</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1,
    };
  },
  watch: {
    currentPage: function (newVal, oldVal) {
      let newCurrentPage = parseInt(newVal);
      if (Number.isNaN(newCurrentPage)) {
        return;
      }
      if (newCurrentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      } else if (newCurrentPage < 1) {
        this.currentPage = 1;
      } else {
        this.$emit("onCurrentPageChanged", this.currentPage);
      }
    },
  },
  props: {
    totalPages: Number,
  },
  mounted() {
    if (this.$route.query.page) {
      this.currentPage = parseInt(this.$route.query.page);
    }
  },
  methods: {
    onNextClicked() {
      if (this.currentPage + 1 <= this.totalPages) {
        this.currentPage = this.currentPage + 1;
      }
    },
    onPreviousClicked() {
      if (this.currentPage - 1 >= 1) {
        this.currentPage = this.currentPage - 1;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 32px;
}

.buttons {
  min-width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  border: 1px solid darkgray;
  border-radius: 2px;
  background: #f1f1f1;
  -webkit-touch-callout: none; 
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;      
  font-size: 12px; 
  color: #32335a;
}

.buttons:hover{
  background: rgb(190, 230, 255);;
}

.result {
  height: 50px;
  line-height: 40px;
  margin-left: 10px;
  text-align: center;
  color: #32335a;
}

.container input {
  width: 60px;
  min-width: 60px;
  height: 38px;
  outline: none;
  margin-left: 4px;
  margin-right: 10px;
  direction: rtl;
  border: 1px solid darkgray;
  border-radius: 2px;
  outline-color: rgb(190, 230, 255);
  color: #32335a;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  text-align: left;
}
</style>