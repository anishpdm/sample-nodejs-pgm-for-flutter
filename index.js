var Express=require("express")
var bodyParser=require("body-parser")

var app=Express()


app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())


app.get("/", (request,response)=>{

    var getname=request.query.name;
    var getroll=request.query.rollno;


response.send("Hello "+getname+" <h1> ,Rollno: "+getroll+" ,  Welcome To My Website  </h1>  ")

}   )


app.post('/add',(req,res)=>{

    var getnum1=parseInt(req.body.num1)
    var getnum2=parseInt(req.body.num2)
    var result=getnum1+getnum2
    console.log(result)
    res.status(200).json({"sum":result}) 



})


app.post('/checkevenorodd',(req,res)=>{

    var getnum1=parseInt(req.body.num1)

    if(getnum1%2==0)
    {
        res.status(200).json({"result":"even number"}) 

    }
    else{
        res.status(200).json({"result":"Odd number"}) 
   
    }
 

})


app.post('/student',(req,res)=>{

    var getname=req.body.name
    var getroll=req.body.roll


        res.status(200).json({"name":getname,"rollno":getroll}) 

   
 

})



app.get('/home',(request,response)=>{
    var getname=request.query.name;
    var getroll=request.query.rollno;


response.send("Hello "+getname+" <h1> ,Rollno: "+getroll+" ,  Welcome To My Website  </h1>  ")

   
})



app.listen(3002, (error)=>{

    if(error){
        console.log("Error Occured")
    }
    else{
        console.log("Server Running on http://localhost:3002")
 
    }

}  )


