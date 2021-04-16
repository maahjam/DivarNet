<template>
  <div>
    <Filters @onFilterApplied="onFilterApplied" />
    <div class="__table">
      <table id="change-table">
        <thead>
          <tr>
            <th class="star"></th>
            <th>نام تغییر دهنده</th>
            <th class="date" @click="onDateClicked">
              {{ getDateLableString() }}
            </th>
            <th>نام آگهی</th>
            <th>فیلد</th>
            <th>مقدار قدیمی</th>
            <th>مقدار جدید</th>
          </tr>
        </thead>

        <tbody>
          <ChangeItem
            v-for="(change, i) in changes"
            :key="i"
            :change="change"
            :cellsCount="cellsCount"
            :isSelected="selectedChangesId.includes(change.id)"
            @onMarked="onChangeClicked"
          />
        </tbody>
      </table>
    </div>
    <Pagination
      :totalPages="totalPages"
      @onCurrentPageChanged="onCurrentPageChanged"
    />
  </div>
</template>

<script>
import Filters from "./Filters";
import ChangeItem from "./ChangeItem";
import Pagination from "./Pagination";
import DataManager from "../utilities/DataManager";
import LocalStorageManager from "../utilities/LocalStorageManager";

export default {
  name: "ChangeContainer",
  data() {
    return {
      changes: [],
      cellsCount: 0,
      selectedChangesId: [],
      perPage: 10,
      currentPage: 1,
      totalPages: 1,
      ascSortByDate: null,
      name: null,
      date: null,
      title: null,
      field: null,
    };
  },
  components: {
    Filters,
    ChangeItem,
    Pagination,
  },
  methods: {
    onChangeClicked(changeId) {
      if (this.selectedChangesId.includes(changeId)) {
        LocalStorageManager.removeSelectedChangeId(changeId);
      } else {
        LocalStorageManager.addSelectedChangeId(changeId);
      }
      this.selectedChangesId = LocalStorageManager.getSelectedChangesId();
    },
    onCurrentPageChanged(newCurrentPage) {
      this.currentPage = newCurrentPage;
      this.changes = DataManager.getData(this.currentPage, this.perPage);
      this.pushQuery();
    },
    onFilterApplied(name, date, title, field) {
      this.name = name;
      this.date = date;
      this.title = title;
      this.field = field;
      this.currentPage = 1;
      DataManager.filterData(this.name, this.date, this.title, this.field);
      this.changes = DataManager.getData(this.currentPage, this.perPage);
      this.totalPages = Math.ceil(
        DataManager.getTotalDataCount() / this.perPage
      );
      this.pushQuery();
    },
    onDateClicked() {
      if (this.ascSortByDate == null) {
        this.ascSortByDate = true;
      } else {
        this.ascSortByDate = !this.ascSortByDate;
      }
      DataManager.sortDataByDate(this.ascSortByDate);
      this.changes = DataManager.getData(this.currentPage, this.perPage);
      this.pushQuery();
    },
    pushQuery(name, date, title, field) {
      let query = {};
      if (this.currentPage !== 1) {
        query.page = this.currentPage;
      }
      if (this.ascSortByDate !== null) {
        query.ascSortByDate = this.ascSortByDate;
      }
      if (this.name) {
        query.name = this.name;
      }
      if (this.date) {
        query.date = this.date;
      }
      if (this.title) {
        query.title = this.title;
      }
      if (this.field) {
        query.field = this.field;
      }
      this.$router.push({ path: "/", query: query });
    },
    getDateLableString() {
      if (this.ascSortByDate == null) {
        return "تاریخ";
      } else if (this.ascSortByDate) {
        return "تاریخ" + "   " + "▲";
      } else {
        return "تاریخ" + "   " + "▼";
      }
    },
  },
  mounted() {
    if (this.$route.query.page) {
      this.currentPage = parseInt(this.$route.query.page);
    }
    if (this.$route.query.ascSortByDate) {
      this.ascSortByDate = this.$route.query.ascSortByDate == "true";
      DataManager.sortDataByDate(this.ascSortByDate);
    }
    this.name = this.$route.query.name;
    this.date = this.$route.query.date;
    this.title = this.$route.query.title;
    this.field = this.$route.query.field;
    DataManager.filterData(this.name, this.date, this.title, this.field);
    this.totalPages = Math.ceil(DataManager.getTotalDataCount() / this.perPage);
    this.changes = DataManager.getData(this.currentPage, this.perPage);
    this.selectedChangesId = LocalStorageManager.getSelectedChangesId();
    this.cellsCount = document.querySelector(
      "#change-table"
    ).rows[0].cells.length;
  },
};
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
  background: rgb(190, 230, 255);
  border: 2px solid gray;
}

.__table {
  overflow-x: auto;
  direction: rtl;
}

.star {
  min-width: 25px;
  width: 25px;
  max-width: 25px;
}

.date {
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

tr {
  min-height: 50px;
  height: 50px;
  max-height: 50px;
}
</style>