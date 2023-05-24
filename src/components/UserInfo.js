export class UserInfo {
    constructor(configProfile) {
        this._profileName = document.querySelector(configProfile.profileNameSelector);
        this._profileAbout = document.querySelector(configProfile.profileAboutSelector);
        this._profileAvatar = document.querySelector(configProfile.profileAvatarSelector);
    }

    setUserInfo({username,proffesion,avatar}) {
        this._profileName.textContent = username;
        this._profileAbout.textContent = proffesion;
        this._profileAvatar.src = avatar;

    }
    getUserInfo() {
        return {
            username: this._profileName.textContent,
            proffesion: this._profileAbout.textContent
        }
    }
}