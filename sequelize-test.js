const {Sequelize,Model,DataTypes} =require('sequelize')
const sequelize=new Sequelize('employees','xuhui','flower', 
  {dialect: 'mysql'})


const User = sequelize.define("user",{
  name: DataTypes.TEXT,
  favouriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

(async () => {
  await sequelize.sync({force: true});
})();

const jane=User.bind({name: "Jane"});
console.log(jane instanceof User);
console.log(jane.name);
//async jane.save();
console.log(jane)
console.log('Jane was saved to database!');

