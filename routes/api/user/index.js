const router = require('express').Router()
const controller = require('./user.controller')

router.get('/list', controller.list)
router.post('/assign-admin/:username', controller.assignAdmin)

module.exports = router