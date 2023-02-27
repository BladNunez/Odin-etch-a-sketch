const container = document.querySelector('.container');

//create 16x16 square divs before adding to parent container 
for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
                const squares = document.createElement('div');
                container.appendChild(squares);
        }
}
const divs = container.querySelectorAll('div');

divs.forEach((div) =>{
        div.style.cssText = 'border-style: solid; border-color: red;'
});

//event listeners that use mouse to go over element and change color
//when leaving color changes back
divs.forEach((divColor) =>{
        divColor.addEventListener('mouseenter' , (e) =>{
                divColor.style.backgroundColor = 'yellow';
        });
        
        divColor.addEventListener('mouseleave' , (e) =>{
                divColor.style.backgroundColor = 'white';
        });
        

})
