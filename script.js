
const popupElement = document.querySelector(".popup")
const popupOpenProfile = document.querySelector(".profile__edit-button");
const popupCloseProfile = document.querySelector(".popup__close-button");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const editProfile = document.querySelector(".popup__container");
let profileTitleElement = document.querySelector(".profile__title");
let profileSubtitleElement = document.querySelector(".profile__subtitle");

 function openForm(){
    popupElement.classList.add("popup__opened"); 
    inputName.value = profileTitleElement.textContent;
    inputAbout.value = profileSubtitleElement.textContent;
   
}

function closeForm(){
    popupElement.classList.remove("popup__opened"); 
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = `${inputName.value}`;
    profileSubtitleElement.textContent = `${inputAbout.value}`;
    closeForm ();
}

popupOpenProfile.addEventListener('click', openForm);
popupCloseProfile.addEventListener('click', closeForm);
editProfile.addEventListener('submit', handleFormSubmit);