
import Auth0LockPasswordless from 'auth0-lock-passwordless';

const clientID = "0VryOL7K5T0bAF9fVOBYIrnQI6Qxs2qc";
const domain = "ripreal.auth0.com";

class authAPI {
    
    constructor() {
        this._lock = new Auth0LockPasswordless(clientID, domain);
    }

    onAuthenticated(callback) {
        this._lock.on("authenticated", (authResult) => {
            // Use the token in authResult to getUserInfo() and save it to localStorage
            this._lock.getUserInfo(authResult.accessToken, (error, profile) => {
                if (error)
                    callback.call(this, error);
                else {
                    localStorage.setItem('accessToken', authResult.accessToken);
                    localStorage.setItem('profile', JSON.stringify(profile));
                    callback.call(this, error, profile.nickName);
                }
            })
        });
    }

    singIn() {
        // invoke magiclink with options and callback
        this._lock.emailcode(
            {
                closable: true,  
                oidcConformant: true,
                callbackURL: 'https://YOUR_APP/callback',
                theme: {
                    logo: 'https://example.com/logo.png',
                    primaryColor: '#31324F'
                }
            }, function(error, email) {
            if (!error) {
                alert("A magic link has been sent to " + email);
            }
        });
    }

    login() {
        // invoke magiclink with options and callback
        this._lock.magiclink({closable: true,  oidcConformant: true}, function(error, email) {
            if (!error) {
                alert("A magic link has been sent to " + email);
            }
        });
    }
}

module.exports = authAPI;