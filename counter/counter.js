const output = document.getElementById('counter');
const btns = document.querySelectorAll('#btn');

let counter = 0;

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        let item =  e.currentTarget.classList
       if(item.contains('increase')){
           counter++;
       }
        else if(item.contains('decrease')){
           counter--;
       }
       else {
           counter = 0
       }
       if(counter > 0){
           output.style.color = "green";
       }
       if(counter < 0){
           output.style.color = "red";
       }
       if(counter == 0){
           output.style.color = "black";
        }
       output.innerHTML = counter;
    })
});