const x_class = 'x'
const circle_class = 'circle'
const cellElement = document.querySelectorAll('[data-cell]')
let circleTurn

cellElement.forEach(cell =>{
    cell.addEventListener('click' , handleClick, {once:true})
})

function handleClick(e){
    const cell = e.target
    const currentClass = circleTurn ? circle_class : x_class 
    placeMark(cell , currentClass)
}
function placeMark(cell , currentClass){
    cell.classList.add(currentClass)
}