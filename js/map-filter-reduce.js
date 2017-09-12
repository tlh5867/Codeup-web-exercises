"use strict";


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },]

    console.log(users);

    //Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    // const threePlus = users.filter(function (item) {
    //         if (item.languages.length >= 3)
    //             return item;
    //     });
    //
    //     console.log(threePlus);

    // let filteredList = users.filter(user => users.languages.length >= 3 );
    // console.log(filteredList);

    function hasThreePlus(user) {
        return user.languages.length >= 3
    }

    let userHasThreePlus = users.filter(hasThreePlus);

    console.log(userHasThreePlus);
    //Use .map to create an array of strings where each element is a user's email address

            // normal js solution
    var emailAddress = users.map(function(users){ /*function is an annon. function, users is the item,*/
        return users.email;
    })
        console.log(emailAddress);

            //es6 solution
    let arrayEmails = users.map( (user) => {
        return user.email;
        });

    //Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user



let reduces = users.reduce((obKeys, obValues) => {
        obKeys[obValues.id] = obValues
        return obKeys;
    }, {});
    console.log(reduces);



