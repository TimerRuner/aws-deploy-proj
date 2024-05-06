import userService from '../service/user.service.js';

class UserController {
    getAll(req, res) {
        return res.json(userService.getAll());
    }

    getOneById(req, res) {
        return res.json(userService.getById(req.params.id))
    }

    createUser(req, res) {
        const { name, email } = req.body
        return res.json(userService.create(name, email))
    }
}

export default new UserController();