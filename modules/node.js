export default class Node{
    constructor(col){
        this._col = col;
        this._val = null;
    }

    get val(){
        return this._val;
    }

    set val(newVal){
        this._val = newVal;
    }

    get col(){
        return [ this._col];
    }
}