//screen
let screen = document.getElementById("screen");


function press(numValue){
    
    if(screen.value == 0){
       screen.value ='';
    }
    screen.value += numValue;
}



function clearScreen(val){
    screen.value = val;
}
function backspace(){
    const space = screen;
    screen.value = space.value.substring(0, space.value.length - 1);
}
function calculate(){
    if(screen.value != ''){
        try{
            clearScreen(eval(screen.value))
        }catch(err){
            clearScreen("Bad expression")
        }
    }
}



function sine(){
    screen.value = Math.sin(screen.value * Math.PI / 180);
}
function cosine(){
    screen.value = Math.cos(screen.value * Math.PI / 180);
}
function tan(){
    screen.value = Math.tan(screen.value * Math.PI / 180);
}
function log(){
    screen.value = Math.log10(screen.value);
}
function percent(){
    screen.value = (screen.value / 100);
}
function square(){
    screen.value = Math.pow(screen.value,2);
}
function cube(){
screen.value = Math.pow(screen.value,3);
}
function sqrt(){
screen.value = Math.sqrt(screen.value);
}



