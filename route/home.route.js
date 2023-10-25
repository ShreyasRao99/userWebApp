const express = require('express');
const router = express.Router();

router.post('/',async (req, res)=>{
    try{
        res.render(path.join(__dirname, '../dist/mealawe-admin/index'));

    }catch(e){
        console.log(e);
        res.status(500).send({ error: 'Please retry after some time!' });    
    }
});

module.exports = router;