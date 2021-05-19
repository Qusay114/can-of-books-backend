const UserModel = require('./User');

const getBooks =  (req,res) => {
  const {email} = req.query ;
  console.log(email);
  UserModel.find({email:email} , (error , data) => {
    if(error) console.log(error);
    res.send(data[0].books);
  } );
};

module.exports = getBooks ;
