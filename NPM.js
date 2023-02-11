// console.log("sbjsdhkadijalsd");
const express=require('express');
const fs=require('fs');
const path = require('path');
const { urlencoded } = require('express');

const app=express();


const port=90;
app.use('/static',express.static('static'));
app.use(express.urlencoded());


app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


app.get("/",(req,res)=>{
    const params={'message':'opened succesfully'};
    res.render('index.pug',params);
});
app.get("/projects",(req,res)=>{
    res.render('index.pug');
});
app.get("/join",(req,res)=>{
    const p={'message':'opened succesfully'}
    res.render('index1.pug',p);
});

app.post("/join",(req,res)=>{
    const p={'message':'submitted succesfully'};
    let names=req.body.names;
    let phno = req.body.phno;
    let email = req.body.email;
    let outputvi=`${names},${phno},${email}`;
    fs.writeFileSync('output.txt',outputvi);
    const params = {'message': 'Your form has been submitted successfully'};
    // res.send("cghdgdsfygiku",params);
    // console.log("sucudcjsodc");
    res.status(200).render('index1.pug', params);
    // res.send('index1.pug');
});
// app.post("/",(req,res)=>{
//     console.log('home');
//     res.send('this home post page');
// });
// app.get("/about",(req,res)=>{
//     console.log('about page');
//     res.send('this is about page');
// });

app.listen(port,()=>{
    console.log(`live ${port}`);
});
