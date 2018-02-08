import request from 'request';

export default class AuthAPI {
    
    static login() {
        const userSettings = require("../../userSettings.json");
        request
        .post(userSettings.AUTH_SERVER + "/login")
        .on('response', (response) => {
            alert(response);
        })
    }

}
