let axios = require('axios');

let username = "keenwarrior";




async function fetchUser(username){
    let url = "https://api.github.com/users/" + username;
    let resposne = await axios.get(url);
    console.log(resposne.data.avatar_url);
    return resposne.data;
}

let out = fetchUser("keenwarrior");
console.log("Hello");






