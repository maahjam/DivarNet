<template>
  <div>
    <Filters/>
    <ChangeList/>
    
  </div>
</template>

<script>
import ChangeList from './ChangeList'
import Filters from './Filters'

export default {
  name: 'ChangeContainer',
  components:{
    ChangeList,
    Filters
  }
}
</script>


