import myFetch from "./myFetch";

export let CurrentUser = null;

export async function Login(email, name, password) {

    const user = await myFetch('/users/login', { email, name, password }) ;

    return CurrentUser = user;
}
