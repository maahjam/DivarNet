<template>
         <tr>
            <td class="star" @click="onChangeClicked">{{isSelected ? '*' : ''}}</td>
            <td>{{change.name}}</td>
            <td>{{change.date}}</td>
            <td>{{change.title}}</td>
            <td>{{change.field}}</td>
            <td>{{change.old_value}}</td>
            <td>{{change.new_value}}</td>
         </tr>
   
</template>

<script>
export default {
  name: 'ChangeListItem',
  props: {
    change: {
      type: Object,
    },
    cellsCount: Number,
    isSelected: Boolean
  },
  methods:{
    onChangeClicked(event){
      this.$emit('onMarked', this.change.id)
    }
  }
}
</script>

<style scoped>
td{
  text-align: center;
  padding: 8px;
  color: #32335a;
  min-width: 150px;
  width: calc((100% - 16px) / var(--cellsCount));
  border: 1px solid lightslategray;
}

tr:nth-child(even){
  background-color: #f2f2f2
}


.star{
    min-width: 25px;
    width: 25px;
    max-width: 25px;
    cursor: pointer;
}
</style>