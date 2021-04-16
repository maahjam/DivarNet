<template>
    <div class="container">
        <div>
            <p>نام تغییر دهنده</p>
            <input type="text" v-model="name">
        </div>
        <div>
            <p>تاریخ</p>
            <input type="text" v-model="date">
        </div>
        <div>
            <p>نام آگهی</p>
            <input type="text" v-model="title">
        </div>
        <div>
            <p>فیلد</p>
            <input type="text" v-model="field">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Filters',
      data(){
        return{
            name: null,
            date: null,
            title: null,
            field: null,
        }
    },
    watch: {
      name: function (newVal, oldVal) {
        this.emitData()
      },
      date: function (newVal, oldVal) {
        this.emitData()
      },
      title: function (newVal, oldVal) {
        this.emitData()
      },
      field: function (newVal, oldVal) {
        this.emitData()
      },
    },
    methods:{
     emitData(){
      this.$emit('onFilterApplied', this.name, this.date, this.title, this.field)
     }
  },
    mounted(){
      this.name = this.$route.query.name
      this.date = this.$route.query.date
      this.title = this.$route.query.title
      this.field = this.$route.query.field
   }
}
</script>

<style scoped>
.container{ 
    /* background: salmon; */
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 32px;
}

.container div{
   text-align: right;
   color: #32335a;
}
.container input{
    height: 30px;
    width: 200px;
    outline: none;
    direction: rtl;
}

.container div{
    justify-items: stretch;
    /* background: seagreen; */
    flex-grow: 4;
}

</style>