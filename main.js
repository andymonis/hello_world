/**
 * Main
 */
class Main {
    constructor(){
        this.init();
    }

    init(){
        setInterval(()=>{
            document.querySelector("#output").innerText=new Date().toLocaleString();
        },1000)
    }
}

export default Main