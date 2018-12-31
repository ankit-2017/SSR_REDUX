
import express from 'express'
import renderer from './server/helpers/renderer'
import createStore from './server/helpers/createStore'


const app = express()
const port = 5001

app.use(express.static('build'))

app.get('*',(req, res)=>{
    
    const store = createStore()

    renderer(req, res, store)
})

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})