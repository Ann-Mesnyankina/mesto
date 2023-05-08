import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__profile-form');
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
        this._submitForm = submitForm;
    }

    _getInputValues() {
        this._valueForm = {};
        this._inputList.forEach(input => {
            this._valueForm[input.name] = input.value;
        });
        return this._valueForm
    }

    setUserValue(data) {
        this._inputList.forEach(input => {
            input.value = data[input.name];

        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitForm(this._getInputValues())
            this.close();
        });
    }

    close() {
        super.close();
        this._popupForm.reset();

    }

}