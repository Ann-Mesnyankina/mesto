
const popupProfile = document.querySelector('.popup_add-profile');
const popupImage = document.querySelector('.popup_add-image');
const popupImageContainer = document.querySelector('.popup_open-image');

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

/*открытие попап*/
const openPopup = function (popup) {
    popup.classList.add("popup_opened");
}

function openProfile() {
    openPopup(popupProfile);
    inputName.value = profileTitleElement.textContent;
    inputAbout.value = profileSubtitleElement.textContent;
}

popupOpenProfile.addEventListener('click', openProfile);

function openAddImage() {
    openPopup(popupImage);
}
popupAddImage.addEventListener('click', openAddImage);

function openImage() {
    openPopup(popupImageContainer);
};


/*зыкрытие попап*/
const closePopup = function (popup) {
    popup.classList.remove("popup_opened");
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


/*обработчик события сохранить*/
function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileTitleElement.textContent = inputName.value;
    profileSubtitleElement.textContent = inputAbout.value;
    closeProfile();
}
profileEdit.addEventListener('submit', handleFormSubmitProfile);


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
    linkCardTemplate.alt = item.name;

    linkCardTemplate.addEventListener('click', function (event) {
        image.src = item.link;
        imageCaption.textContent = item.name;
        image.alt = item.name;
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
cardProfileForm.addEventListener('submit', handleCardEdit);


/*обработчик кнопки*/
function handleCardDelete(event) {
    const buttonTrashCard = event.target.closest('.element__item');
    buttonTrashCard.remove();
};

function addlIkeEventListener(event) {
 event.target.classList.toggle('element__like-button_active');
}

/*слушатели*/
function setEventListeners(cardElement) {
    cardElement.querySelector('.element__remove-button').addEventListener('click', handleCardDelete);
    cardElement.querySelector('.element__like-button').addEventListener('click', addlIkeEventListener);
}









