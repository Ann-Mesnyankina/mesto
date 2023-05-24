(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p;var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_getResData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorization}}).then(this._getResData)}},{key:"getInfoUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._authorization}}).then(this._getResData)}},{key:"addNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._getResData)}},{key:"deleteCards",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._getResData)}},{key:"replaceUserData",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.proffesion})}).then(this._getResData)}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._getResData)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._getResData)}},{key:"replaceAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._getResData)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function u(t,e,r){return(e=a(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=function(){function t(e,r,n,o,i){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_handleCardDelete",(function(){a._openPopupRemove(a._cardId)})),u(this,"_handleLikeClick",(function(){a._modifyLike(a._likebuttonCard,a._cardId)})),u(this,"_handleOpenImage",(function(){a._openImage(a._item)})),u(this,"deleteCard",(function(){a._element.remove(),a._element=null})),u(this,"_checkIsLike",(function(){a._likes.some((function(t){return t._id===a._myId}))&&a._likebuttonCard.classList.add("element__like-button_active"),a._counterLike.textContent=a._likesLength})),u(this,"_checkRemoveTrash",(function(){a._ownerId!==a._myId&&a._buttonTrashCard.remove()})),u(this,"setLikes",(function(t){a._likebuttonCard.classList.toggle("element__like-button_active"),a._counterLike.textContent=t.length})),this._item=e,this._link=e.link,this._name=e.name,this._likes=e.likes,this._cardId=e._id,this._ownerId=e.owner._id,this._myId=e.myId,this._likesLength=e.likes.length,this._templateSelector=r,this._openImage=n,this._openPopupRemove=o,this._modifyLike=i}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return this._cardElement=document.querySelector(this._templateSelector).content.querySelector(".element__item").cloneNode(!0),this._cardElement}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._counterLike=this._element.querySelector(".element__like-count"),this._linkCard=this._element.querySelector(".element__image"),this._nameCard=this._element.querySelector(".element__title"),this._buttonTrashCard=this._element.querySelector(".element__remove-button"),this._likebuttonCard=this._element.querySelector(".element__like-button"),this._nameCard.textContent=this._name,this._linkCard.src=this._link,this._linkCard.alt=this._name,this._checkRemoveTrash(),this._checkIsLike(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){this._buttonTrashCard.addEventListener("click",this._handleCardDelete),this._likebuttonCard.addEventListener("click",this._handleLikeClick),this._linkCard.addEventListener("click",this._handleOpenImage)}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,m(n.key),n)}}function h(t,e,r){return(e=m(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var b=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"_handleButtonClose",(function(){r.close()})),h(this,"_handleEscClose",(function(t){"Escape"===t.key&&r.close()})),h(this,"_handleOverlayClose",(function(t){t.target===t.currentTarget&&r.close()})),this._popup=document.querySelector(e),this._buttonClosePopup=this._popup.querySelector(".popup__close-button"),this._popupForm=this._popup.querySelector(".popup__profile-form")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._buttonClosePopup.addEventListener("click",this._handleButtonClose),this._popup.addEventListener("click",this._handleOverlayClose)}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function w(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(n){var o=g(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}(this,t)});function i(t){var e,r,n,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=v(r=o.call(this,t)),a=function(t){r._image.src=t.link,r._imageCaption.textContent=t.name,r._image.alt=t.name,S((e=v(r),g(i.prototype)),"open",e).call(e)},(u=w(u="open"))in n?Object.defineProperty(n,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[u]=a,r._image=r._popup.querySelector(".popup__image-card"),r._imageCaption=r._popup.querySelector(".popup__caption"),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(b);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._inputList=Array.from(r._popupForm.querySelectorAll(".popup__input")),r._submitForm=e,r._saveBtn=r._popupForm.querySelector(".popup__save-button"),r._defaultText=r._saveBtn.textContent,r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._valueForm={},this._inputList.forEach((function(e){t._valueForm[e.name]=e.value})),this._valueForm}},{key:"setUserValue",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;C(P(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._saveBtn.textContent="".concat(t._saveBtn.textContent,"..."),t._submitForm(t._getInputValues())}))}},{key:"close",value:function(){C(P(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setDefaultText",value:function(){this._saveBtn.textContent=this._defaultText}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}var R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileNameSelector),this._profileAbout=document.querySelector(e.profileAboutSelector),this._profileAvatar=document.querySelector(e.profileAvatarSelector)}var e,r;return e=t,(r=[{key:"setUserInfo",value:function(t){var e=t.username,r=t.proffesion,n=t.avatar;this._profileName.textContent=e,this._profileAbout.textContent=r,this._profileAvatar.src=n}},{key:"getUserInfo",value:function(){return{username:this._profileName.textContent,proffesion:this._profileAbout.textContent}}}])&&I(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,x(n.key),n)}}function A(t,e,r){return(e=x(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t){var e=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===q(e)?e:String(e)}var D=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,"_isInputInvalid",(function(){return Array.from(n._inputList).some((function(t){return!t.validity.valid}))})),A(this,"_validityButton",(function(){n._buttonForm.classList.remove(n._inactiveButtonClass),n._buttonForm.removeAttribute("disabled",!0)})),A(this,"_inValidityButton",(function(){n._buttonForm.classList.add(n._inactiveButtonClass),n._buttonForm.setAttribute("disabled",!0)})),A(this,"_kitEventListeners",(function(){n._inputList.forEach((function(t){t.addEventListener("input",(function(){n._inputElem=t,n._checkInputValidity(),n._checkSubmitButtonState()}))}))})),A(this,"resetErrorFormOpened",(function(){n._inputList.forEach((function(t){n._inputElem=t,n._errorContainer=n._formElem.querySelector("#".concat(n._inputElem.id,"-error")),t.validity.valid||n._hideError(),n._inValidityButton()}))})),this._setting=r,this._inputSelector=r.inputSelector,this._submitButtonSelector=r.submitButtonSelector,this._inactiveButtonClass=r.inactiveButtonClass,this._inputErrorClass=r._inputErrorClass,this._errorClass=r.errorClass,this._formElem=e,this._buttonForm=e.querySelector(this._submitButtonSelector),this._inputList=Array.from(e.querySelectorAll(this._inputSelector))}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._kitEventListeners()}},{key:"_showError",value:function(){this._inputElem.classList.add(this._inputErrorClass),this._errorContainer.classList.add(this._errorClass),this._errorContainer.textContent=this._inputElem.validationMessage}},{key:"_hideError",value:function(){this._inputElem.classList.remove(this._inputErrorClass),this._errorContainer.textContent="",this._errorContainer.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(){this._errorContainer=this._formElem.querySelector("#".concat(this._inputElem.id,"-error")),this._inputElem.validity.valid?this._hideError():this._showError()}},{key:"_checkSubmitButtonState",value:function(){this._isInputInvalid()?this._inValidityButton(this._buttonForm):this._validityButton()}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,J(n.key),n)}}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},N.apply(this,arguments)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}function J(t){var e=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===U(e)?e:String(e)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(n);if(o){var r=$(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}(this,t)});function u(t){var e,r,n,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),n=V(r=i.call(this,t)),a=function(){N((e=V(r),$(u.prototype)),"open",e).call(e)},(o=J(o="open"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r}return e=u,(r=[{key:"setEventListeners",value:function(){var t=this;N($(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm()}))}},{key:"setSubmit",value:function(t){this._submitForm=t}}])&&F(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b),M={formSelector:".popup__profile-form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_visible",errorClass:"popup__error_active"},G=document.querySelector(".popup_add-profile"),K=document.querySelector(".popup_add-image"),Q=document.querySelector(".profile__add-button"),W=document.querySelector(".profile__edit-button"),X=document.querySelector(".popup_add-avatar");function Y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}document.querySelector(".popup_delete-card");var tt=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"7be41956-6286-4bf4-8a12-62c40ef340d2","Content-Type":"application/json"}}),et=new R({profileNameSelector:".profile__title",profileAboutSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar"}),rt=new k(".popup_open-image");rt.setEventListeners();var nt=new H(".popup_delete-card");function ot(t){var e=new c(t,".template",rt.open,(function(t){nt.open(),nt.setSubmit((function(){tt.deleteCards(t).then((function(){e.deleteCard(),nt.close()})).catch((function(t){return console.error("Не получилось удалить карточку ".concat(t))}))}))}),(function(t,r){t.classList.contains("element__like-button_active")?tt.deleteLike(r).then((function(t){e.setLikes(t.likes)})).catch((function(t){return console.error("Не получилось удалить лайк ".concat(t))})):tt.addLike(r).then((function(t){e.setLikes(t.likes)})).catch((function(t){return console.error("Не получилось добавить лайк ".concat(t))}))}));return e.generateCard()}nt.setEventListeners();var it=new f((function(t){it.addItem(ot(t))}),".element"),ut=new L("#profile",(function(t){tt.replaceUserData(t).then((function(t){et.setUserInfo({username:t.name,proffesion:t.about,avatar:t.avatar}),ut.close()})).catch((function(t){return console.error("Ошибка при обновлении редактирования профиля ".concat(t))})).finally((function(){return ut.setDefaultText()}))}));ut.setEventListeners();var at=new L("#add-images",(function(t){Promise.all([tt.addNewCard(t),tt.getInfoUser()]).then((function(t){var e=Y(t,2),r=e[0],n=e[1];r.myId=n._id,it.addItem(ot(r)),at.close()})).catch((function(t){return console.error("Ошибка при обновлении новой карточки ".concat(t))})).finally((function(){return at.setDefaultText()}))}));at.setEventListeners();var ct=new L("#add-avatar",(function(t){tt.replaceAvatar(t).then((function(t){et.setUserInfo({username:t.name,proffesion:t.about,avatar:t.avatar}),ct.close()})).catch((function(t){return console.error("Ошибка при обновлении аватара ".concat(t))}))}));ct.setEventListeners();var lt=new D(G.querySelector(".popup__profile-form"),M);lt.enableValidation();var st=K.querySelector(".popup__profile-form"),ft=new D(st,M);ft.enableValidation();var pt=new D(X.querySelector(".popup__profile-form"),M);pt.enableValidation(),W.addEventListener("click",(function(){ut.open(),ut.setUserValue(et.getUserInfo()),lt.resetErrorFormOpened()})),Q.addEventListener("click",(function(){at.open(),ft.resetErrorFormOpened(),st.reset()})),document.querySelector(".profile__avatar-button").addEventListener("click",(function(){ct.open(),pt.resetErrorFormOpened()})),Promise.all([tt.getInitialCards(),tt.getInfoUser()]).then((function(t){var e=Y(t,2),r=e[0],n=e[1];r.forEach((function(t){t.myId=n._id})),et.setUserInfo({username:n.name,proffesion:n.about,avatar:n.avatar}),it.renderItems(r.reverse())})).catch((function(t){return console.error("Не получилось загрузить данные ".concat(t))}))})();