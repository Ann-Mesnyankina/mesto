import { Popup } from "./Popup";
export class PopupRemoveCard extends Popup {
    constructor(popupSelector) {
        super(popupSelector)   
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm();
        });
    }
    setSubmit(submitForm){
        this._submitForm = submitForm
    }
}