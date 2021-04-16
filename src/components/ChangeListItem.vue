<template>
         <tr>
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
    cellsCount: Number
  },
}
</script>

<style scoped>
td{
  text-align: center;
  padding: 8px;
  color: #32335a;
  width: calc((100% - 16px) / var(--cellsCount));
  border: 1px solid lightslategray;
  min-width: 150px;
}

tr:nth-child(even){
  background-color: #f2f2f2
}
</style>