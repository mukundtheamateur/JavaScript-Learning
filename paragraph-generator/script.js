const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");
let numOfWords;

const generateWOrd = (n) =>{
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<n; ++i)
    {
        const random = (Math.random()*25).toFixed(0);
        text += letters[random];
    }
    return text;
}
const generatePara = () =>{
   numOfWords = +input.value;

   const para = document.createElement("p");
   let data = "";
   for(let i=0; i<numOfWords; i++){
    const randomNumber = (Math.random()*15).toFixed(0);
    data += generateWOrd(randomNumber).toLowerCase();
    data += " ";
   }
     para.innerText = data;
    para.setAttribute("class", "paras");
    container.append(para);
};


