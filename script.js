const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = "#";
    for(let i=0 ; i< 6 ; i++){
        color+= hex[Math.floor(Math.random()* 16)];
    }
    return color;


};

let side =0;


const startchang = function(){
    function run(){
        document.body.style.background = randomColor();
        document.querySelector('h2').innerHTML = randomColor();
       }
    
        side = setInterval(run,1000)


    
}

const stopchang = function(){

    
   

    
    clearInterval(side)
    

}


console.log(randomColor());

document.querySelector("#start").addEventListener('click', startchang)



document.querySelector("#stop").addEventListener('click',stopchang)