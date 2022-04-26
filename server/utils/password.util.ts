const bcrypt = require('bcryptjs')

export default class PasswordUtil {

    static async encryptPassword(password: String) {
        const salt = await bcrypt.genSaltSync(10)
        return await bcrypt.hash(password, salt)
    }

    static async validatePassword(userPassword: String, requestPassword: String){

        return bcrypt.compare(userPassword, requestPassword)
        
    }
}