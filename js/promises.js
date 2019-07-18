const wait = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, 1000);
    });

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));





const gitName = prompt("what is your username?");
fetch('https://api.github.com/users/${gitName}', {headers: {'Authorization': 'token ' + githubKey}})
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(jsonified => console.log(jsonified))
.then(usersArray => {
    for (let user of usersArray) {
        console.log(user.html_url);
    }
});

// function loadGithubUser(name) {
//     return fetch(`https://api.github.com/users/${gitName}`)
//         .then(response => response.json());
//         console.log(response);
}
// fetch('https://api.github.com/users/users/:${gitName}/events')