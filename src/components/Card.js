export class Card {
    constructor(item, templateSelector, openImage, openPopupRemove, modifyLike) {
        this._item = item;
        this._link = item.link;
        this._name = item.name;
        this._likes = item.likes;
        this._cardId = item._id;
        this._ownerId = item.owner._id;
        this._myId = item.myId;
        this._likesLength = item.likes.length;
        this._templateSelector = templateSelector;
        this._openImage = openImage;
        this._openPopupRemove = openPopupRemove;
        this._modifyLike = modifyLike;
    }

    _getTemplate() {
        this._cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element__item')
            .cloneNode(true)
        return this._cardElement
    }

    generateCard() {
        this._element = this._getTemplate();
        this._counterLike = this._element.querySelector('.element__like-count');
        this._linkCard = this._element.querySelector('.element__image');
        this._nameCard = this._element.querySelector('.element__title');
        this._buttonTrashCard = this._element.querySelector('.element__remove-button');
        this._likebuttonCard = this._element.querySelector('.element__like-button');
        this._nameCard.textContent = this._name;
        this._linkCard.src = this._link;
        this._linkCard.alt = this._name;
        this._counterLike.textContent = this._likesLength;
        this._checkRemoveTrash();
        this._checkIsLike();
        this._setEventListeners();
        return this._element;
    }

    _handleCardDelete = () => {
        this._openPopupRemove(this._cardId)
    }

    _handleLikeClick = () => {
        this._modifyLike(this._cardId)

    }

    _handleOpenImage = () => {
        this._openImage(this._item);
    }

    deleteCard = () => {
        this._element.remove();
        this._element = null;
    }

    setLikes(likes) {
        this._likes = likes
        this._likebuttonCard.classList.toggle('element__like-button_active');
        this._counterLike.textContent = likes.length;
    }

    _checkRemoveTrash = () => {
        if (this._ownerId !== this._myId) {
            this._buttonTrashCard.remove();
        }
    }

    findMyLikes() {
        return this._likes.some(user => user._id === this._myId)
    }

    _checkIsLike() {
        this._likes.forEach(item => {
            if (item._id === this._myId) {
                this._likebuttonCard.classList.add('element__like-button_active')
                return
            }
        })
    }

    _setEventListeners() {
        this._buttonTrashCard.addEventListener('click', this._handleCardDelete);
        this._likebuttonCard.addEventListener('click', this._handleLikeClick);
        this._linkCard.addEventListener('click', this._handleOpenImage);
    }
}

