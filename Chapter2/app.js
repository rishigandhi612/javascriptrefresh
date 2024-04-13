const express = require('express')
const app = express()

app.get('/', (req , res )=>{
    res.send('Hello from server')
} )
app.get('/rishi', (req , res )=>{
    res.send('Hello from Rishi')
} )

app.get('/sum/:a/:b', (req , res )=>{
    let x= parseInt(req.params.a)
    let y= parseInt(req.params.b)
    res.send({
        success:true,
        data: (x+y)
    })
} )

app.get('/diff/:a/:b', (req , res )=>{
    let x= parseInt(req.params.a)
    let y= parseInt(req.params.b)
    res.send({
        success:true,
        data: (x-y)
    })
} )

app.get('/multi/:a/:b', (req , res )=>{
    let x= parseInt(req.params.a)
    let y= parseInt(req.params.b)
    res.send({
        success:true,
        data: (x*y)
    })
} )
app.get('/div/:a/:b', (req , res )=>{
    let x= parseInt(req.params.a)
    let y= parseInt(req.params.b)
    res.send({
        success:true,
        data: (x/y)
    })
} )

app.listen(3000, ()=> console.log('Server is running on port 3000') )