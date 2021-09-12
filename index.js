const express = require('express');
const app = express();
const database = require('./db/database')
app.use(express.json());
const formulario = require('./routes/formulario')
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.send('essa é a tela inicial')
})

app.get('/formulario', (req, res)=>{
    res.render('formulario')
})

app.use('/formulario', formulario)

app.listen('3000', ()=>{
    console.log('servidor rodando na porta 3000')
})
