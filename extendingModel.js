const {Sequelize,DataTypes,Model} =require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model{}

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
},{
  sequelize,
  modelName: 'User'
});

console.log(User == sequelize.models.User);

//class User1 extends Model{
//  id;
//  otherPublicField;
//}
//User1.init({
//  id: {
//    type: DataTypes.INTEGER,
//    autoIncrement: true,
//    primaryKey: true
//  }
//  },{sequelize});
//const user=new User1({id: 1});
//console.log(user.id);
class User1 extends Model{
  otherPublicField;
}

User1.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
},{sequelize});
const user = new User1({id: 1});
await User1.sync({force: true});
console.log(user.id);
