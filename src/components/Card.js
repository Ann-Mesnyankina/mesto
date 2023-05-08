

export class Card {
    constructor(item ,templateSelector,openImage) {
        this._item = item;
        this._link = item.link;
        this._name = item.name;
        this._templateSelector = templateSelector;
        this._openImage = openImage;
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
        this._nameCard = this._element.querySelector('.element__title');
        this._nameCard.textContent = this._name;
        this._linkCard = this._element.querySelector('.element__image');
        this._linkCard.src = this._link;
        this._linkCard.alt = this._name;
        this._buttonTrashCard = this._element.querySelector('.element__remove-button');
        this._likebuttonCard = this._element.querySelector('.element__like-button');
        this._setEventListeners();
        return this._element;
    }


    _handleCardDelete = () => {
        this._element.remove();
        this._element = null;
    }

    _addlIkeEventListener = () => {
        this._likebuttonCard.classList.toggle('element__like-button_active');
    }

    _handleOpenImage = () => {
        this._openImage(this._item);
    }

    _setEventListeners() {
        this._buttonTrashCard.addEventListener('click', this._handleCardDelete);
        this._likebuttonCard.addEventListener('click', this._addlIkeEventListener);
        this._linkCard.addEventListener('click', this._handleOpenImage);
    }
}

