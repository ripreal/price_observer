
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
        this._usersRepo.put(userData).promise();
    }

    emptyUser() {
        return {
            'username': '',
            'email': '',
            'password':'',
            'passwordconf':''
        }
    }
}

module.exports = UserService;