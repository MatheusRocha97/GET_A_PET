const User = require('../models/User')

module.exports = class UserController {
  static async register(req, res) {
    const camposEsperados = ["name", "email", "phone", "password", "confirmpassword"]
    // const { name, email, phone, password, confirmpassword } = req.body
    const erros = []

    camposEsperados.map(campo => {
      if (!req.body[`${campo}`]) {
        erros.push(`Campo ${campo} é obrigatório.`)
      }
    })

    if (erros.length) {
      return res.status(422).json({ message: erros })
    }

    // Check if user exists
    const userExists = await User.findOne({ email: email })

    if (userExists) {
      res.status(422).json({ message: "Por favor, utilize outro e-mail!" })
      return
    }

    

  }
}