import mockData from '../assets/data.json'

class DataManager {

    constructor() {
      this._data = mockData;
    }
  
    getData = (currentPage, perPage) => {
        return this._data.slice(((currentPage - 1) * perPage), (currentPage * perPage));
    };

    getTotalDataCount = () => {
        return this._data.length;
    };

    filterData = (name, date, title, field) => {
        let filteredData = mockData;
        if (name){
            filteredData = filteredData.filter(d => (d.name.includes(name)));
        }
        if (date){
            filteredData = filteredData.filter(d => (d.date == date));
        }
        if (title){
            filteredData = filteredData.filter(d => (d.title.includes(title)));
        }
        if (field){
            filteredData = filteredData.filter(d => (d.field == field));
        }
        this._data = filteredData
    };

    sortDataByDate = (isAscending) => {
        if (isAscending){
            this._data.sort((a, b) => new Date(b.date) - new Date(a.date));
         }else{
            this._data.sort((a, b) => new Date(a.date) - new Date(b.date));
         }
    };
  
  }
  
  export default new DataManager();