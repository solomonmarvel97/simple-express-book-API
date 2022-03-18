const mongoose = require('mongoose')
const { bookSchema } = require('./bookschema')
const uuid = require('uuid')
mongoose.connect('mongodb://localhost:27017/books')
const library = mongoose.model('Library', { name: String })
const shelf = new library({ name: 'Zeffy' })




exports.Book = mongoose.model('Book', bookSchema)




// const create = async () => {
//     let book1 = new Bookshelf({
//         _id: uuid.v4(),
//         ISBN: "9787543321722",
//         Name: "The Tragedy of Hamlet",
//         Author: "William Shakespeare",
//         Genre: "Drama"
//     })
//     await book1.save()
// }



