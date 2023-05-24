import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
        this._submitForm = submitForm;
        this._saveBtn = this._popupForm.querySelector('.popup__save-button');
        this._defaultText = this._saveBtn.textContent;
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
            this._saveBtn.textContent = `${this._saveBtn.textContent}...`
            this._submitForm(this._getInputValues())
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    setDefaultText() {
        this._saveBtn.textContent = this._defaultText;
    }

}