function jokes(){

fetch('https://api.chucknorris.io/jokes/random').then((response)=>{
if(response.status===200){
    // console.log(response.json());
    return response.json();
}
}).then((data)=>{
// console.log(data);
var jokeResult=data.value
console.log(jokeResult)
let joke=document.getElementById("joke")
joke.innerHTML=jokeResult
})
}
jokes();
const button1 = document.getElementById("changeJoke")
button1.addEventListener("click",jokes)
// const button = document.getElementById("joke");
// button.addEventListener("click", getJoke);
