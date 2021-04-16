<template>
    <div>
        <div class="__table">
            <table id="change-table">
              <thead>
                <tr>
                <th class="star"></th>
                <th>نام تغییر دهنده</th>
                <th class="date" @click="onDateClicked">{{getDateLableString()}}</th>
                <th>نام آگهی</th>
                <th>فیلد</th>
                <th>مقدار قدیمی</th>
                <th>مقدار جدید</th>
                </tr>
              </thead>

              <tbody>
                <ChangeListItem v-for="(change, i) in changes" :key="i" :change="change" :cellsCount="cellsCount" :isSelected="selectedChangesId.includes(change.id)" @onMarked="onChangeClicked"/>
              </tbody>

            </table>
        </div>
        <Pagination :totalPages="totalPages" @onCurrentPageChanged="onCurrentPageChanged"/>
    </div>
</template>

<script>
import ChangeListItem from './ChangeListItem'
import data from '../assets/data1.json'
import LocalStorageManager from '../utilities/LocalStorageManager'
import Pagination from './Pagination'

export default {
    name: 'ChangeList',
    data(){
        return{
            changes: [],
            cellsCount: 0,
            selectedChangesId: [],
            perPage: 10,
            currentPage: 1,
            totalPages: 1,
            ascSortByDate: null
        }
    },
    components:{
      ChangeListItem,
      Pagination
    },
    methods:{
    onChangeClicked(changeId){
        if (this.selectedChangesId.includes(changeId)){
          LocalStorageManager.removeSelectedChangeId(changeId)
        }else{
          LocalStorageManager.addSelectedChangeId(changeId)
        }
        this.selectedChangesId = LocalStorageManager.getSelectedChangesId()
      },
      onCurrentPageChanged(newCurrentPage){
        this.currentPage = newCurrentPage
        this.changes = data.slice(((this.currentPage - 1) * this.perPage), (this.currentPage * this.perPage))
        this.pushQuery()
        
      },
      pushQuery(){
        let query = {}
        if (this.currentPage !== 1){
           query.page = this.currentPage
        }
        if (this.ascSortByDate !== null){
           query.ascSortByDate = this.ascSortByDate
        }
        this.$router.push({path: '/', query: query })
      },
      getDateLableString(){
        if (this.ascSortByDate == null){
          return "تاریخ"
        }else if (this.ascSortByDate){
          return "تاریخ" + "   " + '▲'
        }else{
          return "تاریخ" + "   " + '▼'
        }
      },
      onDateClicked(){
        if (this.ascSortByDate == null) {
          this.ascSortByDate = true
        }else{
          this.ascSortByDate = !this.ascSortByDate
        }
        this.sortDataByDate(this.ascSortByDate)
        this.pushQuery()
      },
      sortDataByDate(isAscending){
        if (isAscending){
          data.sort((a, b) => new Date(b.date) - new Date(a.date))
        }else{
          data.sort((a, b) => new Date(a.date) - new Date(b.date))
        }
        this.changes = data.slice(((this.currentPage - 1) * this.perPage), (this.currentPage * this.perPage))
      }
    },
    mounted(){
      if (this.$route.query.page){
          this.currentPage = parseInt(this.$route.query.page)
      }
       if (this.$route.query.ascSortByDate){
          this.ascSortByDate = this.$route.query.ascSortByDate == 'true'
          this.sortDataByDate(this.ascSortByDate)
      }
      this.totalPages = Math.ceil(data.length / this.perPage)
      this.changes = data.slice(((this.currentPage - 1) * this.perPage), (this.currentPage * this.perPage))
      this.cellsCount = document.querySelector('#change-table').rows[0].cells.length
      this.selectedChangesId = LocalStorageManager.getSelectedChangesId()
    }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

th {
  text-align: center;
  padding: 8px;
  color: #32335a;
  min-width: 150px;
  width: calc((100% - 16px) / var(--cellsCount));
  background: lightskyblue;
  border: 2px solid gray;
}

.__table{
    overflow-x: auto;
    direction: rtl;
}

.star{
    min-width: 25px;
    width: 25px;
    max-width: 25px;
}

.date{
   cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

}

tr{
    min-height: 50px;
    height: 50px;
    max-height: 50px;
}
</style>