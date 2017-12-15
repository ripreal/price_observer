
const UserService = require('../../repo/userService'); 
const UsersRepo = require('../../repo/usersRepo'); 
const APP_PROFILES = require('../../constants/appProfiles');

it('testCRUD_User', async () => {
    
    let repo = new UsersRepo(APP_PROFILES.TEST);
    try {
        await repo.deleteUsersTable();
    } catch(error) {
        console.log(error.message);
    }
    
    // TEST TABLE

    try {
        await repo.createSheme();
    } catch (error) {
        console.log(error);
        expect(error).toBeNull();
    }
    
    let uService = await new UserService(repo);

    let userData = uService.emptyUser();
    userData.username = 'ripreal';
    userData.email = 'mail@host.ru';
    userData.password = '12345';
    userData.passwordconf   = '12345';

    // TEST PUT

    try {
        await uService.createUser(userData);
    } catch (error) {
        console.log(error);
        expect(error).toBeNull();
    }

    // TEST GET

    try {
        let user = await uService.findOne(userData.email);
        expect(user.username).toBe(userData.username);
    } catch (error) {
        console.log(error);
        expect(error).toBeNull();
    }

    // TEST DELETE 
    
    try {
        await uService.delete(userData.email);
    } catch (error) {
        console.log(error);
        expect(error).toBeNull();
    }

}, 99999);
