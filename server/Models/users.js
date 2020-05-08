const User = [
    {Name: 'akash dev', Username: 'ad1', Email: 'ad1@gmail.com', Password:'2020', City:'New Paltz, NY', isAdmin:false, userID:0 },
    {Name: 'gagan ashi', Username: 'ga1', Email: 'ga@gmail.com', Password:'1234', City:'Albany, NY', isAdmin:true, userID:1}
];

function Login(username, password) {
  
  const user = User.find(x => x.Username == username);
  if(!user) throw Error('User not found');
  if(user.Password != password) throw Error('Wrong Password');

  return user;
};

function Get(userID){
    return User[userID]
  }
;
module.exports = {
  Login, Get, User

}