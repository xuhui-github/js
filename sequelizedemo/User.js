import {Sequelize,DataTypes } from 'sequelize';
const sequelize= new Sequelize('sqlite::memory:');
const User=sequelize.define('User',{
  username: DataTypes.String,
  birthday: DataTypes.Date,
});


