const UserModel = require('./User');

const addNewBook = (req , res ) => {
  const {email , bookName , description } = req.body ;
  console.log(req.body);
  UserModel.find({email:email} , (error , user ) => {
    if(error) res.send(error);
    user[0].books.push({
      name:bookName,
      description:description,
      status:'200',
    });
    user[0].save();
    console.log(user);
    res.send(user[0]);
  });
};

module.exports = addNewBook ;

