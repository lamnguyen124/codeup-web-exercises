const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    } );
}

wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait(1000).then(() => console.log('You\'ll see this after 1 second'));

const getLastPush = function(username) {
    const giturl = "https://api.github.com/users/"+username+"/events";
    return fetch(giturl, {
        headers: {
            "Authorization": `token ${githubToken}`
        }
    })
        .then(response => response.json())
        .then(events => {
            for (let event of events) {
                if (event.type === "PushEvent") {
                    return (event.created_at);
                }
            }
        })

}

let username = prompt("What user do you want to check up on?");
console.log(getLastPush(username));