// --this was the example when we used both , resolve and reject
const display = async () =>{
    const myPromise= new Promise((resolve,reject) =>{
        resolve('I Hate you !!');
        reject('Sorry Folks,there is a error');
    });
    //if we want to console, then -
    // const value= await myPromise;
    // console.log(value);

    //if we have to edit the html only and show it on the web page,then

    document.getElementById('demo').innerHTML=await myPromise;
}
display();

//--example of using only Resolve

// const display = async () =>{
//     const myPromise =new Promise ((resolve)=>{
//         resolve("I hate You");
//     });
//     document.getElementById('demo').innerHTML=await myPromise;
// }
// display();

//example of set time out 

// const display = async ()=>{
//     const myPromise= new Promise((resolve,reject)=>{
//        setTimeout(() => {
//            resolve("i just hate you ");
//        }, 3000);
//     });
//     document.getElementById('demo').innerHTML= await myPromise;

// }
// display();

//example of rejection-and for reject we needed a try catch block because
//await used for the resolved(result) part .(its like .then);

// const display = async ()=>{
//     try{
//         const myPromise =new Promise((resolve,reject)=>{
//             reject("Sorry Folks,Got some Error");
//         });
//         document.getElementById('demo').innerHTML=await myPromise;
//     }
//     catch(error){
//        document.getElementById('demo').innerHTML=error;
//     }
// };
// display();