
const UsersRepo = require('./usersRepo');

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