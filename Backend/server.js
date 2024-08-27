const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/deepthought',(req,res)=>{
    res.sendFile(__dirname + '/db.json');
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})