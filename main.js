/**
 * Main
 */
class Main {
    constructor(){
        document.getElementById("btn-echo").addEventListener("click",()=>{
            let el = document.getElementById("output");
            el.innerText += `Hello ${Date.now()}\n`;
        });
    }
}

export default Main