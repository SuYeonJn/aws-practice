var express = require('express')
var app = express()


app.listen(80,function(){
    console.log('connected!!!!!!!!!!!!!!!!!!!!')
})

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname, '/public/mainpage.html')
})