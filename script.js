// Async await
//Async Function always Return a Promise

// async function greet() {
//     // return "Sandeep";
//     return new Promise((resolve, reject) => {
//         resolve("Sandeep")
//     })
// }
// const response = greet()
// // console.log(response)
// response.then((data) => console.log(data))
//     .catch((Error) => {
//         console.log("Error:", Error)
//     })

//await function kya hota hai- jab v aap api or koi link se data fetch karte hai tab wo wait karte rahta hai aur wo jab tak wait karta hai 
//tab tak mera data na aa jaye, aur jab data ayega tab hi wo next line of code ko execute karega. so aise
// karne se humara next line of code ruk jaiyega its means = freeze ho jayega. so isliye Async function ko 
// use karte hai wo wait nhi karta hai wo next line of code execute krne chala jata hai

// always remember if we use Await function then always we use Async function to execute program correctly
async function github() {
    // try {
    //     if (!response.ok) {
    //         throw new Error("Data is Not available")
    //     }
    console.log("sandeep");
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);

    const parent = document.getElementById("first")
    for (let user of data) {
        const Element = document.createElement("div")
        Element.classList.add("user")

        const img = document.createElement("img")
        img.src = user.avatar_url;

        const username = document.createElement('h2')
        username.textContent = user.login;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.textContent = "visit profile"

        Element.append(img, username, anchor)
        parent.append(Element)

    }
}
    // catch (Error) {
    //     console.log("error");
    // }


github();


// console.log("hello sandeep bhai kaise ho");
