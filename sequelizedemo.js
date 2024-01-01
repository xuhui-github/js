const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('user', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
(async() => {
  await sequelize.sync({force: true});
 const user=await User.create({firstName: 'xuhui',lastName: 'dong'});
 const user1=await User.create({firstName: 'dhsl',lastName: 'lsd'});
 const user2=await User.create({firstName: 'dieue',lastName: 'dkeur'});
  console.log(user.toJSON());
  console.log(user1.toJSON());
  console.log(user2.toJSON());
  await user.save();
  await user1.save();
  await user2.save();
  console.log('user was saved to the database');
  user1.firstName="kdiel";
  await user1.update({firstName: 'qqqqq'});
  await user1.save();
  console.log('user1 was updated');
  await user1.reload();
  console.log(user1.toJSON());
})();


