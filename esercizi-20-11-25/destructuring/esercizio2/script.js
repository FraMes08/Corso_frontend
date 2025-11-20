let user = { username: "cli_user", role: "editor" };

let { username: nick, role, active = false } = user;

console.log("nick: ", nick);   
console.log("role: ", role);  
console.log("active: ", active); 