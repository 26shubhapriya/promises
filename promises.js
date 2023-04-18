// const posts = [
//     {title:'Post One', body: 'This is post one'},
//     {title:'Post two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(()=>{
//         let output ='';
//         posts.forEach((post,index)=>{
//             output +=`<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             const error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject('Error: Something went wrong')
//             }
//         },2000);
//     })
    
// }
  // Assume that you have an array of posts and a user object
  let posts = [{title: 'POST0'}];
  let user = {
    name: "John",
    lastActivityTime: null
  };
function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'Post1'});
            resolve();
        }, 1000)
    }) 
}

 
   
function deletePost(){
    //complete this function
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            resolve();
        },1000)
    })
}

function updateLastUserActivityTime(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }



// Function to log the posts and last activity time of the user
function logPostsAndLastActivityTime() {
  console.log("Posts:", posts);
  console.log("User Last Activity Time:", user.lastActivityTime);
}

// Get the current time
const currentTime = new Date();

// Output the current time
console.log("Current time:", currentTime);

// Create a new post, update the user's last activity time, and delete the last post
Promise.all([createPost(), updateLastUserActivityTime(user)])
  .then(() => {
    // Both promises have been resolved
    logPostsAndLastActivityTime();
    
   return deletePost();
  })
  .then(() => {
    // Post has been deleted
    console.log("Posts after deletion:", posts);
  });

//createPost({title:'Post Three',body:'This is post three'}).then(getPosts);

//promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,'Goodbye'));

// Promise.all([promise1, promise2, promise3]).then((values)=>console.log(values));