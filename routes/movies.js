const { Router } = require('express')
const router = Router()
const Movie = require('../database/models/Movie')

// ALL
router.get('/', async (req, res) => {
    Movie.findAll().then(movies => {
        res.json(movies)
    })
})

// CREATE
router.post('/', (req, res) => {
    Movie.create({
        title: req.body.title
    }).then(movie => {
        res.json(movie)
    }).catch(error => { res.json(error) })
})

//READ
router.get('/:id', (req, res) => {
    Movie.findByPk(req.params.id).then(movie => {
        res.json(movie)
    })
})

//UPDATE
router.patch('/:id', (req, res) => {
    Movie.update({
        title: req.body.title
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result)
    })
})

//DELETE
router.delete('/:id', (req, res) => {
    Movie.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result)
    })
})

module.exports = router