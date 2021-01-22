
//Callback
let posts = [
    {title:"Post one",body:"This is the first post"},
    {title:"Post two",body:"This is the Second post"}
];
// function getPosts(){
//     setTimeout(() => {
//         let output = ''
//         posts.forEach(post => {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000)
// }
// function creatPost(post,callback){
//     setTimeout(() =>{
//         posts.push(post);
//         callback()
//     },1000)
// }
// creatPost({title:"Post three",body:"This is the third post"},getPosts);

//Promise
let isLogic = true;
function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}
function creatPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject(new Error("Something went wrong"))
            }
        },2000)
    })
}
creatPost({title:"Post three",body:"This is the third post"}).then(getPosts).catch(err => console.log(err.message))
let promise1 = new Promise((resolve,reject) => {
    if(resolve){
        resolve("Hello")
    }
})
let promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,"Good bye");
})

let promise3 = fetch("https://jsonplaceholder.typicode.com/users").then(resolve => resolve.json());
Promise.all([promise1,promise2,promise3]).then(value => {
    console.log(value);
})


//Async / Await
// let isLogic = true;
// function getPosts(){
//     setTimeout(() => {
//         let output = ''
//         posts.forEach(post => {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000)
// }
// function creatPost(post){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             posts.push(post);
//             let error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject(new Error("Something went wrong"))
//             }
//         },2000)
//     })
// }
// // async function initial(){
// //     await creatPost({title:"Post three",body:"This is the third post"})
// //     getPosts();
// // }
// // initial();


// // Async / await / fetch

// async function fetchUser(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json()
//     console.log(data)
// }

// fetchUser();