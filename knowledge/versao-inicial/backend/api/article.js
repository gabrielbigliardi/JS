const queries = require('./queries')

module.exports = app => {
    const { existsOrError, } = app.api.validation

    const save = (req, res) => {
        const article = { ...req.body } // pega o body da requisição e armazena na var
        if (req.params.id) {
            article.id = req.params.id   // se a requisição tem o parametro id, ele vai usar o id dentro de article
            // console.log(article.id)
        }

        try {
            existsOrError(article.name, 'Nome não informado')
            existsOrError(article.description, 'Descrição não informada')
            existsOrError(article.categoryId, 'Categoria não informada')
            existsOrError(article.userId, 'Autor não informado')
            existsOrError(article.content, 'Conteúdo não informado')
        } catch (msg) {
            res.status(400).send(msg)
        }


        if (article.id) { // se o artigo tem id, significa que é para se fazer um update
            app.db('articles')
                .update(article) //faz update em cima do objeto definido na linha 5
                .where({ id: article.id }) //para ter certeza que está alterando apenas o artigo que deve ser alterado
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else { // o else, portanto, seria para incluir um artigo
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }

    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('articles')
                .where({ id: req.params.id }).del() //onde o id confere com o id passado no parametro da requiição

            try {
                existsOrError(rowsDeleted, 'Artigo não foi encontrado.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }


    const limit = 10 //limitar a consulta a no maximo 10 registros na paginação

    const get = async (req, res) => {
        const page = req.query.page || 1  // espera receber a pagina que vai exibir, e que esse atributo venha a partir da requisição, atraves da query

        const result = await app.db('articles').count('id').first()  //count para saber quanto registros de artigos tem na base de dados
        const count = parseInt(result.count)

        app.db('articles')
            .select('id', 'name', 'description')
            .limit(limit).offset(page * limit - limit)  //offset é o deslocamento, a partir de onde ele vai começar a fazer a consulta
            .then(articles => res.json({ data: articles, count, limit }))  //retorna tambem o count e o limit para serem usados no paginador no front
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => { // esse vai retornar apenas 1 artigo, n precisando se preocupar com paginação
        app.db('articles')
            .where({ id: req.params.id })
            .first() // toda consulta retorna um array, usando o first pega-se o primeiro elemento desse array e usa como resultado
            .then(article => {
                article.content = article.content.toString() //o artigo vem em formato binario, precisando usar toString para converter para string
                return res.json(article)
            })
            .catch(err => res.status(500).send(err))
    }


    const getByCategory = async (req, res) => {


        const categoryId = req.params.id
        const page = req.query.page || 1
        const categories = await app.db.raw(queries.categoryWithChildren, categoryId)
        const ids = categories.rows.map(c => c.id) // no final em ids terá um array de ids, o proprio id da categoria pai, mais os ids das categorias filhas

        app.db({ a: 'articles', u: 'users' })
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
            .limit(limit).offset(page * limit - limit)
            .whereRaw('?? = ??', ['u.id', 'a.userId'])
            .whereIn('categoryId', ids)
            .orderBy('a.id', 'desc')
            .then(articles => res.json(articles))
            .catch(err => res.status(500).send(err))
    }


    return { save, remove, get, getById, getByCategory }
}