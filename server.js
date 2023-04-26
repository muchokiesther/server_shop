const jsonserver = require("json-server")
const cors = require("cors")
const path = require("path")

const serverr = jsonserver.create()
const router = jsonserver.router(path.join(__dirname,"db.json"))
const middleware = jsonserver.defaults()

serverr.use(cors())
serverr.use(router)
serverr.use(middleware)
serverr.use(jsonserver.bodyParser)





const port=8000

serverr.listen(port, ()=> {
    console.log("server is listening on port 8000")
})
