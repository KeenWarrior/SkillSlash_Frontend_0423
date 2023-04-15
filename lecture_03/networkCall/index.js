let axios = require('axios');
let fs = require('fs');
let path = require("path");

let username = "keenwarrior";

async function fetchUser(username){
    let url = "https://api.github.com/users/" + username;
    let resposne = await axios.get(url);
    if(resposne.status == 200){
        let image_url = resposne.data.avatar_url;
        let image_data = await axios({url: image_url, method: "get", responseType: "stream"});
        let location = path.resolve(__dirname, "images", username+".png");
        console.log(location);
        let writer = fs.createWriteStream(location);
        image_data.data.pipe(writer);
    } else if(resposne.status == 404){
        console.log("Wrong Username : "+username)
    } else {
        console.log("Something went wrong");
    }
    
}

let out = fetchUser("satheeshkumar3593");
console.log("Hello");






