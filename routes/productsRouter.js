 const express = require('express');
 const router = express.Router();

router.get('/', (req,res) => {
    res.send('hello man');
})

 module.exports = router;