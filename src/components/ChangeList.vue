<template>
    <div>
        <div class="__table">
            <table id="change-table">
              <thead>
                <tr>
                <th class="star"></th>
                <th>نام تغییر دهنده</th>
                <th>تاریخ</th>
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
            totalPages: 1
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
      }
    },
    mounted(){
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
</style>