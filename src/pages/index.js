
import css from '../pages/index.css';
import image from '../image/image.jpg';
import { Api } from '../components/Api';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupRemoveCard } from '../components/PopupRemoveCard';
import {
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
    popupOpenProfile,
    popupAvatarSelector,
    popupProfileAvatar,
    popupDeleteSelector
} from '../utils/constants.js';


/*Экземпляры*/
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
        authorization: '7be41956-6286-4bf4-8a12-62c40ef340d2',
        'Content-Type': 'application/json'
    }
});

const userInfo = new UserInfo(configProfile);

const popupWithImage = new PopupWithImage(popupImageSelector);

popupWithImage.setEventListeners();

const popupRemoveCard = new PopupRemoveCard(popupDeleteSelector)

popupRemoveCard.setEventListeners();

function creatCard(data) {
    const card = new Card(data, templateSelector, popupWithImage.open, (cardId) => {
        popupRemoveCard.open()
        popupRemoveCard.setSubmit(() => {
            api.deleteCards(cardId)
                .then(() => {
                    card.deleteCard();
                    popupRemoveCard.close()
                })
                .catch((error => console.error(`Не получилось удалить карточку ${error}`)))
        })
    }, (cardId) => {
        const isLiked = card.findMyLikes();
         if (!isLiked) {
          api.addLike(cardId)
                .then(res => {
                    card.setLikes(res.likes)
                })
                .catch((error => console.error(`Не получилось добавить лайк ${error}`)))
        } else {
         api.deleteLike(cardId)
                .then(res => {
                    card.setLikes(res.likes)
                })
                .catch((error => console.error(`Не получилось удалить лайк ${error}`)))
        }
    })
    return card.generateCard();
}

const section = new Section((item) => {
    section.addItem(creatCard(item))
}, cardListSelector)

const popupEditProfile = new PopupWithForm(popupProfileSelector, (data) => {
    api.replaceUserData(data)
        .then(res => {
            userInfo.setUserInfo({ username: res.name, proffesion: res.about, avatar: res.avatar })
            popupEditProfile.close()
        })
        .catch((error => console.error(`Ошибка при обновлении редактирования профиля ${error}`)))
        .finally(() => popupEditProfile.setDefaultText())
});
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm(popupCardSelector, (data) => {
    api.addNewCard(data)
        .then((infoCard) => {
            infoCard.myId = userInfo.getId()
            section.addItem(creatCard(infoCard));
            popupAddCard.close()
        })
        .catch((error => console.error(`Ошибка при обновлении новой карточки ${error}`)))
        .finally(() => popupAddCard.setDefaultText())
})
popupAddCard.setEventListeners();

const popupAddAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
    api.replaceAvatar(data)
        .then(res => {
            userInfo.setUserInfo({ username: res.name, proffesion: res.about, avatar: res.avatar })
            popupAddAvatar.close()
        })
        .catch((error => console.error(`Ошибка при обновлении аватара ${error}`)))
        .finally(() => popupAddAvatar.setDefaultText())
})
popupAddAvatar.setEventListeners();
/*Валидация*/
/*запуск валидации*/
const formElemProfile = popupProfile.querySelector('.popup__profile-form');
const formValidatorProfile = new FormValidator(formElemProfile, configValidation);
formValidatorProfile.enableValidation();

const formElemAddCard = popupImage.querySelector('.popup__profile-form');
const formValidatorAddCard = new FormValidator(formElemAddCard, configValidation);
formValidatorAddCard.enableValidation();

const formElemAddAvatar = popupProfileAvatar.querySelector('.popup__profile-form');
const formValidatorAddAvatar = new FormValidator(formElemAddAvatar, configValidation);
formValidatorAddAvatar.enableValidation();

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
}
popupAddImage.addEventListener('click', openAddImage);

/*открытие попап аватар*/
document.querySelector('.profile__avatar-button').addEventListener('click', () => {
    popupAddAvatar.open();
    formValidatorAddAvatar.resetErrorFormOpened();
})

Promise.all([api.getInitialCards(), api.getInfoUser()])
    .then(([infoCard, infoUser]) => {
        infoCard.forEach(item => { item.myId = infoUser._id });
        userInfo.setUserInfo({ username: infoUser.name, proffesion: infoUser.about, avatar: infoUser.avatar })
        userInfo.setId(infoUser._id)
        section.renderItems(infoCard.reverse())
    })
    .catch((error => console.error(`Не получилось загрузить данные ${error}`)))