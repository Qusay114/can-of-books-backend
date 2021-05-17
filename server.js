const server = require('express');
const cors = require('cors');
require('dotenv').config();

//modules file
const UserModel = require('./modules/User');

const app = server();
app.use(cors());
const port = process.env.PORT || 3003;

const test = (req , res) => res.send('test passed');
app.get('/' , test );


const initializeDB = new UserModel({
  email:'eng.qusay015@gmail.com',
  books:[{name:'book 1 ' , description:'desc 1' , status:'good'},{name:'book 2 ' , description:'desc 2' , status:'very good'} , {name:'book 3 ' , description:'desc 3' , status:'greate'}]
});

app.get('/books' , (req,res) => {
  const {email} = req.query ;
  console.log(email);
  UserModel.find({email:email} , (error , data) => {
    if(error) console.log(error);
    res.send(data[0].books);
  } );
});

const booksSeeding = () => initializeDB.save() ;
//booksSeeding() ;

app.listen(port ,() => {
  console.log(`port ${port}`);
});
