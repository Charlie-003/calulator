let string = '';
let buttons = document.querySelectorAll('.button');
let body = document.querySelector(".body");
    setInterval(() => {
        body.style.backgroundColor = randomColor();
    }, 5000);


// to change button's color 

function bcChange(button) {
    var newColor = randomColor();
    button.style.backgroundColor = newColor;
    setInterval(() => {
    button.style.backgroundColor = '#2e3a44';
    }, 500);

}


// generate a random color 

function randomColor(){
    let letter = '0123456789ABCDEF';
    let color  = '#';
    for (let i = 0; i < 6; i++){
        color +=  letter[Math.floor(Math.random()*16)] ;
    }
    return color;
}

randomColor();



Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{

    bcChange(button);

        if(e.target.innerHTML == '='){
            string = eval(string)
        document.querySelector('input').value= string;
            
        }else if(e.target.innerHTML == 'c'){
            string = '' 
        document.querySelector('input').value= string;
            
        }
        else{

            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('input').value= string;
        }
        })
    
})