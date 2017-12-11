
const UsersRepo = require('./usersRepo');

class UserService {

    constructor(usersRepo) {
        if (!usersRepo) {
            this._usersRepo = new UsersRepo();
            this._usersRepo.createSheme();
        }
        else {
            this._usersRepo = usersRepo;
        }
    }   

    async createUser(userData) {
        return this._usersRepo.put(userData);
    }

    emptyUser() {
        return {
            'username': '',
            'password':'',
            'passwordconf':''
        }
    }
}

module.exports = UserService;