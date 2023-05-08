export class FormValidator {
    constructor(formElem, setting) {
        this._setting = setting;
        this._inputSelector = setting.inputSelector;
        this._submitButtonSelector = setting.submitButtonSelector;
        this._inactiveButtonClass = setting.inactiveButtonClass;
        this._inputErrorClass = setting._inputErrorClass;
        this._errorClass = setting.errorClass;
        this._formElem = formElem;
        this._inputList = Array.from(formElem.querySelectorAll(this._inputSelector));
        this._buttonForm = formElem.querySelector(this._submitButtonSelector);
    }
    enableValidation() {
        this._kitEventListeners();
    }
    _showError() {
        this._inputElem.classList.add(this._inputErrorClass);
        this._errorContainer.classList.add(this._errorClass);
        this._errorContainer.textContent = this._inputElem.validationMessage;
    }

    _hideError() {
        this._inputElem.classList.remove(this._inputErrorClass);
        this._errorContainer.textContent = '';
        this._errorContainer.classList.remove(this._errorClass);

    }
    _checkInputValidity() {
        this._errorContainer = this._formElem.querySelector(`#${this._inputElem.id}-error`);
        if (this._inputElem.validity.valid) {
            this._hideError();
        } else {
            this._showError();
        }

    }
    _isInputInvalid = () => {
        return Array.from(this._inputList).some((inputElem) => !inputElem.validity.valid)
    }
    _checkSubmitButtonState() {
        if (this._isInputInvalid()) {
            this._inValidityButton(this._buttonForm);
        }
        else {
            this._validityButton();
        }
    }

    _validityButton = () => {
        this._buttonForm.classList.remove(this._inactiveButtonClass);
        this._buttonForm.removeAttribute('disabled', true);
    }

    _inValidityButton = () => {
        this._buttonForm.classList.add(this._inactiveButtonClass);
        this._buttonForm.setAttribute('disabled', true);
    }
    _kitEventListeners = () => {
        this._inputList.forEach((inputElem) => {
            inputElem.addEventListener('input', () => {
                this._inputElem = inputElem;
                this._checkInputValidity();
                this._checkSubmitButtonState();
            })
        })
    }
    resetErrorFormOpened() {
        this._inputList.forEach(inputElem => {
            this._inputElem = inputElem;
            this._errorContainer = this._formElem.querySelector(`#${this._inputElem.id}-error`);
            if (!inputElem.validity.valid) {
                this._hideError();
            }
            this._inValidityButton()
        })
    }
}