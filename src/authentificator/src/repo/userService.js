
const UsersRepo = require('./usersRepo');
const APP_PROFILES = require('../constants/appProfiles');

class UserService {

    constructor(usersRepo) {
        if (!usersRepo) {
            let profile = APP_PROFILES[process.env.REGION] || APP_PROFILES["TEST"];
            this._usersRepo = new UsersRepo(profile);
       }
        else {
            this._usersRepo = usersRepo;
        }
        this._activeSessions = [];
    }   

    async createUser(userData) {
        let user = userData;
        try {
            user = await this._usersRepo.put(user);
        } catch(error) {
            throw new Error(error);
        }
        return user;
    }

    async findOne(email) {
        let user = null;
        try {
            user = await this._usersRepo.get(email);
        } catch(error) {
            throw new Error(error);
        }
        return user;
    }

    async authenticate(email, password) {
        let user = null;
        try {
            user = await this.findOne(email);
            if (typeof user != 'object' ) {
                throw new Error('User not found!');
            }
            this._activeSessions.push(user.token);
        } catch (error) {
            throw new Error(error);
        }
        
        return user;
    }

    async delete(email) {
        try {
            let user = await this.findOne((email));
            this._activeSessions.delete([user.token]);
            await this._usersRepo.delete(email);
        } catch (error) {
            throw new Error(error);
        }
    }

    authentificated(token) {
        let typ = typeof this._activeSessions.find((val) => val == token);
        return typ !== 'undefined';
    }

    emptyUser() {
        return {
            'token': '',
            'username': '',
            'password':'',
            'email':'', 
            'passwordconf':''
        }
    }
}

module.exports = UserService;