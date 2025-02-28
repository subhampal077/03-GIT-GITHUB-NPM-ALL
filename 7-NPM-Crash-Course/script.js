
// NPM crash course //

// package.json is a file ued to manage project details/metadata and dependencies.

// In a package.json file, the dependencies section lists the packages that is needs to run in our project.

// in package-lock.json file the exact version of packages stored.

// node_modules is create when we run npm install. It stores all the installed dependencies listed in our package.json file, along with their own dependencies.



import axios from "axios";


axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    console.log(response.data);
});

