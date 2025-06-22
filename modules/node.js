export default class Node {
  constructor(row, col) {
    this._row = row;
    this._col = col;

    this._val = null;
  }

  get val() {
    return this._val;
  }

  get row() {
    return [this._row];
  }

  get col() {
    return [this._col];
  }

  set val(newVal) {
    this._val = newVal;
  }
}
