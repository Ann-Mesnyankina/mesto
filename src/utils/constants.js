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
    profileAboutSelector: '.profile__subtitle',
    profileAvatarSelector: '.profile__avatar'
}

const templateSelector = '.template';
const cardListSelector = '.element';
const popupSelector = '.popup';
const popupImageSelector = '.popup_open-image';
const popupProfileSelector = '#profile';
const popupCardSelector = '#add-images';
const popupAvatarSelector = '#add-avatar';
const popupDeleteSelector = '.popup_delete-card'

const popupProfile = document.querySelector('.popup_add-profile');
const popupImage = document.querySelector('.popup_add-image');
const popupAddImage = document.querySelector('.profile__add-button');
const popupOpenProfile = document.querySelector(".profile__edit-button");
const popupProfileAvatar = document.querySelector('.popup_add-avatar');
const popupRemove = document.querySelector('.popup_delete-card');

export {
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
    popupAvatarSelector,
    popupProfileAvatar,
    popupDeleteSelector,
    popupRemove
}