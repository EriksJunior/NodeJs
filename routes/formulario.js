const express = require('express');
const router = express.Router();


router.get('/Cad', (req, res)=>{
    res.send('Salvando informações...')
})

module.exports = router