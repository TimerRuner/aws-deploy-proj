import * as uuid from 'uuid';

class UserService {
    usersDb = []
    create(name, email) {
        return this.usersDb.push({id: uuid.v4(), name, email})
    }

    getById(id) {
        return this.usersDb.find(user => user.id.toString() === id.toString())
    }

    getAll() {
        return this.usersDb
    }
}

export default new UserService();