//libraries
const server = require('express');
const cors = require('cors');
require('dotenv').config();

//modules files
const UserModel = require('./modules/User');
const getBooks = require('./modules/getBooks');
const addNewBook = require('./modules/addNewBook');
const deleteBook = require('./modules/deleteBook');

const app = server();
app.use(cors());
app.use(server.json());
const port = process.env.PORT || 3003;

const test = (req , res) => res.send('test passed');
app.get('/' , test );


const initializeDB = new UserModel({
  email:'eng.qusay015@gmail.com',
  books:[{name:'book 1 ' , description:'desc 1' , status:'200'},{name:'book 2 ' , description:'desc 2' , status:'300'} , {name:'book 3 ' , description:'desc 3' , status:'400'}]
});


app.get('/books' , getBooks);
app.post('/books' , addNewBook ) ;
app.delete('/books/:id' , deleteBook ) ;


const booksSeeding = () => initializeDB.save() ;
//booksSeeding() ;

app.listen(port ,() => {
  console.log(`port ${port}`);
});
