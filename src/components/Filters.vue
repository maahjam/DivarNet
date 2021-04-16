<template>
    <div class="container">
        <div>
            <p>نام تغییر دهنده</p>
            <input type="text">
        </div>
        <div>
            <p>تاریخ</p>
            <input type="text">
        </div>
        <div>
            <p>نام آگهی</p>
            <input type="text">
        </div>
        <div>
            <p>فیلد</p>
            <input type="text">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Filters'
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