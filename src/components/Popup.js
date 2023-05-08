export  class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClosePopup = this._popup.querySelector('.popup__close-button');
    
    }
    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown',this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleButtonClose = () => {
     this.close();
    }

      _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }

    }
    _handleOverlayClose = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }
    setEventListeners() {       
       this._buttonClosePopup.addEventListener('click', this._handleButtonClose);
       this._popup.addEventListener('click',this._handleOverlayClose)
    }
}