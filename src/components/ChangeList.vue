<template>
    <div>
        <div class="__table">
            <table id="change-table">

              <thead>
                <tr>
                <th>نام تغییر دهنده</th>
                <th>تاریخ</th>
                <th>نام آگهی</th>
                <th>فیلد</th>
                <th>مقدار قدیمی</th>
                <th>مقدار جدید</th>
                </tr>
              </thead>

              <tbody>
                <ChangeListItem v-for="(change, i) in changes" :key="i" :change="change" :cellsCount="cellsCount"/>
              </tbody>

            </table>
        </div>
    </div>
</template>

<script>
import ChangeListItem from './ChangeListItem'
import data from '../assets/data.json'

export default {
    name: 'ChangeList',
    data(){
        return{
            changes: [],
            cellsCount: 0
        }
    },
    components:{
      ChangeListItem
    },
    mounted(){
      this.changes = data.slice(0, 10);
      this.cellsCount = document.querySelector('#change-table').rows[0].cells.length;
    },
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
  width: calc((100% - 16px) / var(--cellsCount));
  background: lightskyblue;
  border: 2px solid gray;
  min-width: 150px;
}

.__table{
    overflow-x: auto;
    direction: rtl;
}
</style>