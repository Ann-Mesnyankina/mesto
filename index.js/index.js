
const popup = document.querySelector(".popup");
const popupProfile = document.querySelector('.popup_type_add-profile');
const popupImage = document.querySelector('.popup_type_add-image');
const popupImageContainer = document.querySelector('.popup_type_open-image');

const popupOpenProfile = document.querySelector(".profile__edit-button");
const popupCloseProfile = document.querySelector(".popup__close-button");
const popupCloseImage = document.querySelector("#close-profile-addimage");
const popupCloseImageContainer = document.querySelector('#close-imagecontainer');
const popupAddImage = document.querySelector('.profile__add-button');

const addNewCard = popupImage.querySelector('.popup__profile-form');
let inputTitle = document.querySelector('.popup__input_type_title');
let inputLink = document.querySelector('.popup__input_type_link');
let inputName = document.querySelector(".popup__input_type_name");
let inputAbout = document.querySelector(".popup__input_type_about");

const editProfile = document.querySelector(".popup__profile-form");
const profileTitleElement = document.querySelector(".profile__title");
const profileSubtitleElement = document.querySelector(".profile__subtitle");

/*открытие попап*/
const openForm = function (popup) {
    popup.classList.add("popup_opened");
}

function openProfile() {
    openForm(popupProfile);
    inputName.value = profileTitleElement.textContent;
    inputAbout.value = profileSubtitleElement.textContent;
}

popupOpenProfile.addEventListener('click', openProfile);

function openAddImage() {
    openForm(popupImage);
}
popupAddImage.addEventListener('click', openAddImage);

function openImage() {
    openForm(popupImageContainer);
};


/*зыкрытие попап*/
const closeForm = function (popup) {
    popup.classList.remove("popup_opened");
}
function closeProfile() {
    closeForm(popupProfile);
}
popupCloseProfile.addEventListener('click', closeProfile);

function closeImage() {
    closeForm(popupImage);
}
popupCloseImage.addEventListener('click', closeImage);

function closeImageContainer() {
    closeForm(popupImageContainer);
}
popupCloseImageContainer.addEventListener('click', closeImageContainer);


/*обработчик события сохранить*/
function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileTitleElement.textContent = inputName.value;
    profileSubtitleElement.textContent = inputAbout.value;
    closeProfile();
}
editProfile.addEventListener('submit', handleFormSubmitProfile);


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



/*создание карточки*/
const elementCard = document.querySelector('.element');
const nameCard = document.querySelector('.element__title');
const linkCard = document.querySelector('.element__image');
const templateCard = document.querySelector('.template').content;

/*открытие картинки*/
const image = popupImageContainer.querySelector('.popup__image-card');
const imageCaption = popupImageContainer.querySelector('.popup__caption');



/*функция создания карточки*/
function creatCard(item) {
    const cardElement = templateCard.querySelector('.element__item').cloneNode(true);
    const nameCardTemplate = cardElement.querySelector('.element__title');
    const linkCardTemplate = cardElement.querySelector('.element__image');
    nameCardTemplate.textContent = item.name;
    linkCardTemplate.src = item.link;

    linkCardTemplate.addEventListener('click', function (event) {
        image.src = item.link;
        imageCaption.textContent = item.name;
        openImage(popupImageContainer);
    });

    setEventListeners(cardElement);
    return cardElement;
}

/*отрисовка массива*/
initialCards.forEach(function (item) {
    const cards = creatCard(item);
    elementCard.append(cards);
});

/*вставить карточку*/
function handleCardEdit(evt) {
    evt.preventDefault();    
    const card = { name: inputTitle.value, link: inputLink.value };
    const newCard = creatCard(card);
    elementCard.prepend(newCard);
    evt.target.reset();
    closeImage();
}
addNewCard.addEventListener('submit', handleCardEdit);


/*обработчик кнопки*/
function handleCardDelete(event) {
    const buttonTrashCard = event.target.closest('.element__item');
    buttonTrashCard.remove();
};

function addlIkeEventListener(event) {
    const buttonLikeCard = event.target.classList.toggle('element__like-button_active');
}

/*слушатели*/
function setEventListeners(cardElement) {
    cardElement.querySelector('.element__remove-button').addEventListener('click', handleCardDelete);
    cardElement.querySelector('.element__like-button').addEventListener('click', addlIkeEventListener);
}









