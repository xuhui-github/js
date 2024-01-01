const jane=await User.create({
  username: 'janedoe',
  birthday: new Date(1980,6,30),
});
const users=await User.findAll()

