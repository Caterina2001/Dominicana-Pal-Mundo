import app from './app'
import startDatabase from './config/database.config'

(() => {
    startDatabase()
    app.listen(app.get('PORT'), ()=>{
        console.log("Server is running on port", app.get('PORT'))
    })
})()