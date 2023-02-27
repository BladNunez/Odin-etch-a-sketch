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

//create button
const button = document.createElement('button');
button.textContent = 'Click Me!'
button.style.cssText = 'padding: 5px; margin: 8px;'
container.before(button);

//create new matrix function
function changeMatrix(num){
        for(let i = 0; i < num; i++){
                for(let j = 0; j < num; j++){
                        let squares = document.createElement('div');
                        squares.style.cssText = 'border-style: solid; border-color: red;';
                        container.style.cssText = ` grid-template-columns: repeat(${num},10fr); grid-auto-rows: 2em`;
                        container.appendChild(squares);
                }
        }

}

//event listener to remove divs and create new matrix from user input
button.addEventListener('click', function(e) {
        let num = Number(window.prompt("Enter # for Column and Row"));

        let divs = document.querySelector('div');
        divs.innerHTML = " ";

        changeMatrix(num);
        
});


