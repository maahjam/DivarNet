<template>
    <div>
        <div class="__table">
            <table>
                <tr>
                <th>نام تغییر دهنده</th>
                <th>تاریخ</th>
                <th>نام آگهی</th>
                <th>فیلد</th>
                <th>مقدار قدیمی</th>
                <th>مقدار جدید</th>
                </tr>
                
                <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                </tr>

                <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td> 
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataListItem'
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  height: 100%;
}

th, td {
  text-align: right;
  padding: 8px;
  color: #32335a;
}

th{
  background: lightskyblue;
  border: 2px solid gray;
}

td{
  border: 1px solid lightslategray;
  min-width: 150px;
}

tr:nth-child(even){
  background-color: #f2f2f2
}

.__table{
    overflow-x: auto;
    direction: rtl;
}
</style>