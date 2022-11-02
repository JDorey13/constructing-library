
const Library = require("./library.js")


let collections = new Library("mongodb://127.0.0.1:27017", "library", "books")

async function all(){
    let allBooks = await collections.allBooks()
    console.log(allBooks)
}
all()