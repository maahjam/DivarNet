import mockData from '../assets/data.json'
import BinarySearchTree from './BST'

class DataManager {

    constructor() {
      this._data = mockData;

    //Please uncomment below codes to use BinarySearchTree for date

    //   this._bst = new BinarySearchTree();
    //   let data = this._data;
    //   data.sort((a, b) => new Date(b.date) - new Date(a.date));
    //   for (let i = 0; i < data.length; i++) {
    //     this._bst.insert(data[i]);
    //   }

    }
  
    getData = (currentPage, perPage) => {
        return this._data.slice(((currentPage - 1) * perPage), (currentPage * perPage));
    };

    getTotalDataCount = () => {
        return this._data.length;
    };

    filterData = (name, date, title, field) => {
        let filteredData = mockData;
        if (date){
            //Please uncomment below code to use BinarySearchTree for date
            // filteredData = this._bst.find(date);
            //Please comment below code to use BinarySearchTree for date
            filteredData = filteredData.filter(d => (d.date == date));
        }
        if (name){
            filteredData = filteredData.filter(d => (d.name.includes(name)));
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