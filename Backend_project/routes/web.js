const homecontrol = require('../app/http/controllers/homecontrol')
const authcontrol = require('../app/http/controllers/authcontrol')
const cartcontrol = require('../app/http/controllers/customers/cartcontroller')
function webroutes(app){

    app.get('/',homecontrol().index)
    
    app.get('/cart',cartcontrol().cart)
    
    app.get('/login',authcontrol().login)

    app.post('/login',authcontrol().postLogin)

    
    app.get('/resister',authcontrol().resister)

    app.post('/resister',authcontrol().postResister)
}
module.exports =webroutes