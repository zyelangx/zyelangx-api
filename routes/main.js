require('../logger') // Logger
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).sendFile(basepath + '/views/index.html')
})
router.get('/profile', (req, res) => {
    res.status(200).sendFile(basepath + '/views/profile.html')
})
// router.get('/asupan', (req, res) => {
//     res.status(200).sendFile(basepath+'/views/docs/asupan.html')
// })


module.exports = router