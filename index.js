const express = require('express');
const app = express();
app.use(express.json());

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('formulario')
})



app.listen('3000', ()=>{
    console.log('servidor rodando na porta 3000')
})
