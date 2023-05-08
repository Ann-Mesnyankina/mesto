export class UserInfo {
    constructor(configProfile) {
        this._profileName = document.querySelector(configProfile.profileNameSelector);
        this._profileAbout = document.querySelector(configProfile.profileAboutSelector);
    }

    setUserInfo(data) {
        this._profileName.textContent = data.username;
        this._profileAbout.textContent = data.proffesion;
    }

    getUserInfo() {
        return {
            username: this._profileName.textContent,
            proffesion: this._profileAbout.textContent
        }
    }


}