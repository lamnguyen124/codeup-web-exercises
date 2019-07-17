const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter(user => user.languages.length >= 3);

const email = users.map(user => user.email);

const totalYears = users.reduce(function(accumulation, current){
    return accumulation + current.yearsOfExperience;
},0);

console.log(totalYears/users.length);

const longestEmail = users.reduce((previous, current) => {
    const currentEmail = current.email;
    if(currentEmail.length > previous.length) {
        return currentEmail;
    }else{
        return previous;
    }
},"");

console.log(longestEmail);

const userNames = users.reduce(function(previous, current){
    return previous.concat(current);
},0);

console.log(userNames);