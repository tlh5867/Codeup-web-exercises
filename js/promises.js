"use strict";

const wait = (delayTime) => {
       return new Promise((resolve,reject) =>{
           setTimeout(() => {
           resolve();
        });
    }, delayTime);
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// function wait(delayTime) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, delayTime);
//     });
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// function wait(delayTime){
//     return new Promise(function(resolve, reject){
//         setTimeout(resolve, delayTime);
//         setTimeout(reject, 6000)
//     })
// }''
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// wait(7000).then(() => console.log('T-ERROR'));
//
//
//
//abef9a330a21f5aa1fea01274f483326693f12cd
//GET /users/:username/events/
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
const optionalHeaders ={
    headers: {
        "Authorization": "token abef9a330a21f5aa1fea01274f483326693f12cd"
    }
};

const getCommits = (username) => {
    return fetch(`https://api.github.com/users/${username}/events`,optionalHeaders)
};
let githubPromise = getCommits("tlh5867");

githubPromise.then((Promise) =>{
    Promise.json().then( (response) => {
    console.log(response{0}.created_at);
})
});