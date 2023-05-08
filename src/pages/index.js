
import css from '../pages/index.css';
import image from '../image/image.jpg';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import {
    initialCards,
    configValidation,
    configProfile,
    templateSelector,
    cardListSelector,
    popupSelector,
    popupImageSelector,
    popupProfileSelector,
    popupCardSelector,
    popupProfile,
    popupImage,
    popupAddImage,
    popupOpenProfile
} from '../utils/constants.js';

/*Экземпляры*/
const userInfo = new UserInfo(configProfile);

const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();

const section = new Section({
    items: initialCards, renderer: (item) => {
        const card = new Card(item, templateSelector, popupWithImage.open);
        return card.generateCard();
    }
}, cardListSelector)

section.renderItems();

const popupEditProfile = new PopupWithForm(popupProfileSelector, (item) => {
    userInfo.setUserInfo(item);
});
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm(popupCardSelector, (item) => {
    section.addItem(item);
})
popupAddCard.setEventListeners();

/*Валидация*/
/*запуск валидации*/
const formElemProfile = popupProfile.querySelector('.popup__profile-form');
const formValidatorProfile = new FormValidator(formElemProfile, configValidation);
formValidatorProfile.enableValidation();

const formElemAddCard = popupImage.querySelector('.popup__profile-form');
const formValidatorAddCard = new FormValidator(formElemAddCard, configValidation);
formValidatorAddCard.enableValidation();

/*открытие попап профиля*/
function openProfile() {
    popupEditProfile.open();
    popupEditProfile.setUserValue(userInfo.getUserInfo())
    formValidatorProfile.resetErrorFormOpened();
}
popupOpenProfile.addEventListener('click', openProfile);

/*открытие попап карточки*/
function openAddImage() {
    popupAddCard.open();
    formValidatorAddCard.resetErrorFormOpened();
    formElemAddCard.reset();
}
popupAddImage.addEventListener('click', openAddImage);

