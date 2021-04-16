class LocalStorageManager {

  constructor() {
    this._selectedChangesIdKey = "selectedChangesIdKey"
  }

  addSelectedChangeId = (changeId) => {
    let selectedChangesId = this.getSelectedChangesId();
    selectedChangesId.push(changeId);
    localStorage.setItem(this._selectedChangesIdKey, JSON.stringify(selectedChangesId));
  };

  getSelectedChangesId = () => {
    const selectedChangesId = JSON.parse(localStorage.getItem(this._selectedChangesIdKey));
    return selectedChangesId ? selectedChangesId : [];
  };

  removeSelectedChangeId = (changeId) => {
    let selectedChangesId = this.getSelectedChangesId();
    selectedChangesId = selectedChangesId.filter(item => item !== changeId);
    localStorage.setItem(this._selectedChangesIdKey, JSON.stringify(selectedChangesId));
  };

}

export default new LocalStorageManager();