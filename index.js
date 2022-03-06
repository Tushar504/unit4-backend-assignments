const express=require("express")
const app=express();



app.get("/",(req,res)=>{
    res.send({"string":"Hello"})
})


app.get("/books",(req,res)=>{
    res.send([
        {
            book_name:" Don Quixote",
            Author:"Miguel de Cervantes"
        
        },
        {
            book_name:"A Tale of Two Cities",
            Author:"Charles Dickens"
        
        },
        {
            book_name:" The Lord of the Rings",
            Author:"J.R.R. Tolkien"
        
        },
        {
            book_name:" Harry Potter and the Sorcerer's Stone ",
            Author:"J.K. Rowling"
        
        }
    ]

    )
})
app.listen(5000,()=>{
    console.log("listening on port 5000")
})