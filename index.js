const express=require("express")
const app=express();

let books=[
    {
      name:" In Search of Lost Time ",
      by:" Marcel Proust",
      description:"Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work."
    },
    {
        name:"  Ulysses  ",
        by:" James Joyce",
        description:"lysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses),"
      },
      {
        name:"Don Quixote",
        by:"  Miguel de Cervantes",
        description:"Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry"
      },
      {
        name:"GameOfThrones",
        by:"George R. R. Martin",
        description:"This article is about the novel. For the TV series, see Game of Thrones. For derivative works of the same name, see A Game of Thrones (disambiguation)."
      },
      {
        name:"HarryPotter",
        by:"J. K. Rowling",
        description:"This article is about the series of novels. For other uses, including related topics and derivative works, see Harry Potter (disambiguation). For the character in the series, see Harry Potter (character). For the film adaptations, see Harry Potter (film series). For the franchise as a whole, see Wizarding World."
      }
]

app.get("/books",middle1,(req,res)=>{
    return res.send(books);
})
app.get("/books/:name",middle2,(req,res)=>{
    return res.send(req.data)
})

function middle2(req,res,next){
    req.name=(req.params.name).slice(-(req.params.name.length-1))
   books.map((ele)=>{
       if(ele.name==req.name){
           req.data=ele
       }
   })
    next();
}
function middle1(req,res,next){
    console.log("Fetching all books")
    next();
}
app.listen(1200,()=>{
    console.log("listening")
})