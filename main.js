/**
 * Main
 */
class Main {
    constructor(){
        document.getElementById("btn-echo").addEventListener("click",()=>{
            let el = document.getElementById("output");
            el.innerText = `echo ${Date.now()}`;
        });
    }
}

export default Main