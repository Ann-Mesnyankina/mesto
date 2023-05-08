export class Section{
    constructor({items,renderer},containerSelector){
    this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    }
    
    renderItems(){
    this._initialCards.forEach (item => {
       this.addItem(item);
    })}

    addItem(item){
        this._container.prepend(this._renderer(item));
    }
}
