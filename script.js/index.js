
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initialCards.js';


const configValidation = {
    formSelector: '.popup__profile-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_visible',
    errorClass: 'popup__error_active'
};

const popupProfile = document.querySelector('.popup_add-profile');
const popupImage = document.querySelector('.popup_add-image');

const popupOpenProfile = document.querySelector(".profile__edit-button");
const popupCloseProfile = document.querySelector(".popup__close-button");
const popupCloseImage = document.querySelector("#close-profile-addimage");
const popupCloseImageContainer = document.querySelector('#close-imagecontainer');
const popupAddImage = document.querySelector('.profile__add-button');

const cardProfileForm = popupImage.querySelector('.popup__profile-form');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");

const profileEdit = document.querySelector(".popup__profile-form");
const profileTitleElement = document.querySelector(".profile__title");
const profileSubtitleElement = document.querySelector(".profile__subtitle");

const buttonSubmitResetError = popupImage.querySelector('.popup__save-button');
const inputListResetError = popupImage.querySelectorAll('.popup__input')

/*создание карточки*/
const elementCard = document.querySelector('.element');
const nameCard = document.querySelector('.element__title');
const linkCard = document.querySelector('.element__image');
const templateSelector = '.template';

/*открытие картинки*/
const popupImageContainer = document.querySelector('.popup_open-image');
const image = popupImageContainer.querySelector('.popup__image-card');
const imageCaption = popupImageContainer.querySelector('.popup__caption');


 function openImage (item) {
    image.src = item.link;
    imageCaption.textContent = item.name;
    image.alt = item.name;
    openPopup(popupImageContainer);
};


/*открытие попап*/
const openPopup = function (popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closePopupEsc);
    document.addEventListener('mousedown', closePopupOverlay);
}

function openProfile() {
    openPopup(popupProfile);
    formElemProfile.reset();
    formValidatorProfile.resetErrorFormOpened();
    inputName.value = profileTitleElement.textContent;
    inputAbout.value = profileSubtitleElement.textContent;
}

popupOpenProfile.addEventListener('click', openProfile);

function openAddImage() {
    openPopup(popupImage);
    formElemAddCard.reset();
    formValidatorAddCard.resetErrorFormOpened();
}
popupAddImage.addEventListener('click', openAddImage);


/*зыкрытие попап*/
const closePopup = function (popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closePopupEsc);
    document.removeEventListener('mousedown', closePopupOverlay);

}
function closeProfile() {
    closePopup(popupProfile);
}

function closeImage() {
    closePopup(popupImage);
}

function closeImageContainer() {
    closePopup(popupImageContainer);
}

document.querySelectorAll('.popup__close-button').forEach(button => {
    const buttonsPopupClose = button.closest('.popup');
    button.addEventListener('click', () => closePopup(buttonsPopupClose));
});


/*закрытие по esc*/
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
        }
};

/*закрытие по фону*/
function closePopupOverlay(evt) {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.target === popupOpened) {
        closePopup(popupOpened);
    }
};

/*обработчик события сохранить изменения данных профиля*/
function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileTitleElement.textContent = inputName.value;
    profileSubtitleElement.textContent = inputAbout.value;
    closeProfile();
}
profileEdit.addEventListener('submit', handleFormSubmitProfile);

/*Карточки*/
/*создание экземпляра карточки*/
function creatCard(item){
    const card = new Card(item, templateSelector, openImage);
    const cardElement = card.generateCard();
    return cardElement  
}

function appendCard(box,card){
    box.prepend(card);
}

/*отрисовка массива карточек*/
initialCards.forEach (item => {
    appendCard(elementCard, creatCard(item));
});


/*вставить карточку из формы*/
function handleCardEdit(evt) {
    evt.preventDefault();
    const cardElement = ({name:inputTitle.value,link:inputLink.value}); 
    const card = new Card(cardElement, templateSelector, openImage); 
    appendCard(elementCard, card.generateCard()); 
    evt.target.reset();
    closeImage();
}
cardProfileForm.addEventListener('submit', handleCardEdit);


/*Валидация*/
/*запуск валидации*/
const formElemProfile = popupProfile.querySelector('.popup__profile-form');
const formValidatorProfile = new FormValidator(formElemProfile,configValidation);
formValidatorProfile.enableValidation();

const formElemAddCard = popupImage.querySelector('.popup__profile-form');
const formValidatorAddCard = new FormValidator(formElemAddCard,configValidation);
formValidatorAddCard.enableValidation();








