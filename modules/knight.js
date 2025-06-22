export default class Knight{
    constructor(){
        this._name = "knight"
        this._color = "white";
    }

    get name(){
        return this._name;
    }

    get color(){
        return this._color;
    }

    set color(newColor){
        this._color = newColor;
    }


}