const express = require('express')
const app=express()
const path=require("path")

app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html' )
})

app.get('/rock', (req,res)=>{
    res.sendFile(__dirname + '/public/ROCK.html' )
})

app.get('/hard', (req,res)=>{
    res.sendFile(__dirname + '/public/HARD.html' )
})

app.get('/pop', (req,res)=>{
    res.sendFile(__dirname + '/public/POP.html' )
})

app.get('/ska', (req,res)=>{
    res.sendFile(__dirname + '/public/SKA.html' )
})

app.get('/metal', (req,res)=>{
    res.sendFile(__dirname + '/public/METAL.html' )
})

app.get('/rap', (req,res)=>{
    res.sendFile(__dirname + '/public/RAP.html' )
})

app.get('/nortenas', (req,res)=>{
    res.sendFile(__dirname + '/public/NORTEÑAS.html' )
})

app.get('/senora', (req,res)=>{
    res.sendFile(__dirname + '/public/SEÑORA.html' )
})

app.use((req,res)=>{
    res.sendFile(path.join(__dirname, '/public/error.html'))
})

app.listen(3000)
console.log('servidor en puerto 3000')