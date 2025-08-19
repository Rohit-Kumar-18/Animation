// const url ="https://catfact.ninja/fact";
// const getfacts=async()=>{
//     console.log ( "getting data..");
//     let response = await fetch (url);
//     console.log (response.status);
// };




const url = "https://catfact.ninja/fact";
const factpara=document.querySelector("#catfacts");
const btn=document.querySelector("#but");
//btn.addEventListener("click",getfacts);

const getfacts = async () => {
    console.log("Getting data...");
    let response = await fetch(url);
    let data = await response.json(); // convert to JSON
    factpara.innerText=data.fact;
    //console.log(data.fact); // log the cat fact
};btn.addEventListener("click",getfacts);

// const url = "https://api.meowfacts.com/random";

// const getfacts = async () => {
//     console.log("Getting data...");
//     let response = await fetch(url);
//     let data = await response.json(); // convert to JSON
//     console.log(data.fact); // log the cat fact
// };

// getfacts();
