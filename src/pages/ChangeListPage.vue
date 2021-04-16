<template>
  <div>
    <Filters/>
    <ChangeItem/>
    
  </div>
</template>

<script>
import ChangeItem from '../components/ChangeItem'
import Filters from '../components/Filters'
import data from '../assets/data.json'

export default {
  name: 'ChangeListPage',
  data () {
    return {
      changes: data
    }
  },
  components:{
    ChangeItem,
    Filters
  },
  mounted(){
},
  methods: {
    
  }
}
</script>


