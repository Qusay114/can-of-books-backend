const UserModel = require('./User');

const updateBook = (req , res) => {
  const index = Number(req.params.index) ;
  const {email , bookName , bookDescription} = req.body ;
  UserModel.find({email:email} , (error , user) => {
    if(error) res.send(error);
    user[0].books[index].name = bookName ;
    user[0].books[index].description = bookDescription ;
    console.log(user[0]);
    user[0].save();
    res.send(user[0].books);
  });

  console.log(email);
};

module.exports = updateBook ;
