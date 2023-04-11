const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    //sign in implementado
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password) {
            //verifica email e senha
            return res.status(400).send('Informar usuário e senha!')
        }
        //obtem usuario pelo email
        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if(!user) return res.status(400).send('Usuário não encontrado!')

        //valida a senha
        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if(!isMatch) return res.status(401).send('Email/Senha inválidos!')

        const now = Math.floor(Date.now() / 1000)

        //geramos o payload, com a data de geração do token e data de expiração
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now, //issued At = emitido em
            exp: now + (60 * 60 * 24 * 3) // 1MINUTO * 1HORA * 1DIA * 3DIAS => quando atinge a expiração, a aplicação vai chutar o usuario pra fora, obrigando novo login
        }
        //payload é o corpo da informação, o dado que realmente interessa sem metadados, sem o cabeçalho de transmissao e outras informações acessórias
        //"carga que paga/conteudo que vale a pena"

        //mandamos na resposta o payload e o token para o usuario
        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)            
        })
    }


    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            //problema com o token
        }
        res.send(false)

    }

    return { signin, validateToken }
}