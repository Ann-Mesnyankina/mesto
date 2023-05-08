import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__image-card');
        this._imageCaption = this._popup.querySelector('.popup__caption');
    }

    open = (item) => {
        this._image.src = item.link;
        this._imageCaption.textContent = item.name;
        this._image.alt = item.name;
        super.open();
    }
}