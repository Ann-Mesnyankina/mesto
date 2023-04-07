const configValidation = {
    formSelector: '.popup__profile-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_visible',
    errorClass: 'popup__error_active'
};


const enableValidation = (setting) => {
    const forms = Array.from(document.querySelectorAll(setting.formSelector));
    forms.forEach((formElem) => {
        const inputList = Array.from(formElem.querySelectorAll(setting.inputSelector));
        const buttonForm = formElem.querySelector(setting.submitButtonSelector);
        kitEventListeners(inputList, buttonForm, setting.inputErrorClass, setting.errorClass, setting.inactiveButtonClass);
    })
}


const kitEventListeners = (inputList, buttonForm, inputErrorClass, errorClass, inactiveButtonClass) => {
    inputList.forEach((inputElem) => {
        inputElem.addEventListener('input', () => {
            checkInputValidity(inputElem, inputErrorClass, errorClass);
            checkSubmitButtonState(inputList, buttonForm, inactiveButtonClass);
        })
    })
}

function checkInputValidity(inputElem, errorClass, inputErrorClass) {
    const errorContainer = document.querySelector(`#${inputElem.id}-error`);
    if (inputElem.validity.valid) {
        hideError(inputElem, errorContainer, inputErrorClass, errorClass);
    } else {
        showError(inputElem, errorContainer, inputErrorClass, errorClass, inputElem.validationMessage);
    }
}


const showError = (inputElem, errorContainer, inputErrorClass, errorClass) => {
    inputElem.classList.add(errorClass);
    errorContainer.classList.add(inputErrorClass);
    errorContainer.textContent = inputElem.validationMessage;
};


const hideError = (inputElem, errorContainer, inputErrorClass, errorClass) => {
    inputElem.classList.remove(errorClass);
    errorContainer.textContent = '';
    errorContainer.classList.remove(inputErrorClass);
};

const isInputInvalid = (inputList) => {
    return Array.from(inputList).some((inputElem) => !inputElem.validity.valid)
};

function checkSubmitButtonState(inputList, buttonForm, inactiveButtonClass) {
    if (isInputInvalid(inputList)) {
        inValidityButton(inputList, buttonForm, inactiveButtonClass);
    }
    else {
        validityButton(inputList, buttonForm, inactiveButtonClass);
    }
}

const validityButton = (inputList, buttonForm, inactiveButtonClass) => {
    buttonForm.classList.remove(inactiveButtonClass);
    buttonForm.removeAttribute('disabled', true);
}

const inValidityButton = (inputList, buttonForm, inactiveButtonClass) => {
    buttonForm.classList.add(inactiveButtonClass);
    buttonForm.setAttribute('disabled', true);
}



function resetErrorFormOpened(formElem) {
    formElem.querySelectorAll(configValidation.inputSelector).forEach((inputElem) => {
        const errorText = document.querySelector(`#${inputElem.id}-error`);
        if (!inputElem.validity.valid) {
            hideError(inputElem, errorText, configValidation.errorClass, configValidation.inputErrorClass)
         }
    })
}

enableValidation(configValidation);




