 const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const configValidation = {
    formSelector: '.popup__profile-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_visible',
    errorClass: 'popup__error_active'
};

const configProfile = {
    profileNameSelector: '.profile__title',
    profileAboutSelector: '.profile__subtitle'
}

const templateSelector = '.template';
const cardListSelector = '.element';
const popupSelector = '.popup';
const popupImageSelector = '.popup_open-image';
const popupProfileSelector = '#profile';
const popupCardSelector = '#add-images'

const popupProfile = document.querySelector('.popup_add-profile');
const popupImage = document.querySelector('.popup_add-image');
const popupAddImage = document.querySelector('.profile__add-button');
const popupOpenProfile = document.querySelector(".profile__edit-button");

export {
    initialCards,
    configValidation,
    configProfile,
    templateSelector,
    cardListSelector,
    popupSelector,
    popupImageSelector,
    popupProfileSelector,
    popupCardSelector,
    popupProfile ,
    popupImage,
    popupAddImage,
    popupOpenProfile,
}