<template>
  <div>
    <Filters/>
   <DataListItem/>
    
  </div>
</template>

<script>
import DataListItem from './DataListItem'
import Filters from './Filters'
export default {
  name: 'DataList',
  data () {
    return {
    }
  },
  components:{
    DataListItem,
    Filters
  }
}
</script>


