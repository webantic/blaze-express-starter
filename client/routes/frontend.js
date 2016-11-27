const page = require('page')
const {render} = require('../lib/app')

page('/',  (ctx) => {
    render('index')
})

page.start()