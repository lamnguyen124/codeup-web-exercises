const wait = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve();
    } else {
        reject();
    }
});

function username(){
   const name = prompt("what is your username?");

}

fetch(url, {headers: {'Authorization': 'githubKey'}})


