
const UsersRepo = require('./usersRepo');
const bcrypt = require('bcrypt');

class UserService {

    constructor(usersRepo) {
        if (!usersRepo) {
            this._usersRepo = new UsersRepo();
       }
        else {
            this._usersRepo = usersRepo;
        }
    }   

    async createUser(userData) {
        try {
            await this._usersRepo.put(userData);
        } catch(error) {
            throw new Error(error);
        }
    }

    async findOne(email) {
        let user = null;
        try {
            user = await this._usersRepo.get({'email':email});
        } catch(error) {
            throw new Error(error);
        }
        return user;
    }

    async authenticate(email, password, callback) {
        let user = null;
        try {
            user = await this.findOne(email);
            if (typeof user != 'object' ) {
                throw new Error('User not found!');
            }
        } catch (error) {
            throw new Error(error);
        }

        bcrypt.compare(password, user.password, function (err, result) {
            callback(err, result);
        });
    }

    emptyUser() {
        return {
            'username': '',
            'password':'',
            'email':'', 
            'passwordconf':''
        }
    }
}

module.exports = UserService;