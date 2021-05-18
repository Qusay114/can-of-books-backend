const UserModel = require('./User');

const deleteBook = (req , res) => {
  const id = Number(req.params.id) ;
  console.log( 'delete test id= ',id);
  const {email} = req.query ;
  UserModel.find({email:email} , (error , user) => {
    if(error) res.send(error);
    const filterdBooks = user[0].books.filter((book , index) => {
      console.log('index' , index);
      return id !== index ;
    } );
    user[0].books = filterdBooks ;
    console.log(user[0]);
    user[0].save();
    res.send(user[0].books);
  });

  console.log(email);
};

module.exports = deleteBook ;
