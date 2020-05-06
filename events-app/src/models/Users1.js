const Users1 = [
    { Name: 'Punith', Password: '2020', Email: 'punith@newpaltz.edu',},
    { Name: 'Bracha', Password: '5780', Email: 'chabad@newpaltz.edu',},
    
];

export let CurrentUser = null;

export function signup(email, name, password) {

    const use = Users1.find(x => x.Email == email);
    if(!use) throw Error('User not found');

    const u1 = Users1.find(x => x.Name == name);
    if(!u1) throw Error('User not found');
    if(use.Password != password) throw Error('Wrong Password');
    

    return CurrentUser = use;
}
 