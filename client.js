let numOfGreenBoxes = 0; 
let numOfBlueBoxes = 0; 
let numOfRedBoxes = 0; 
let numOfYellowBoxes = 0; 

$(document).ready(init);

function init() {
    
    const colorBlocks= ['green', 'blue', 'red', 'yellow']; 

    $('.js-btn-green').on('click', addGreenBox);
    $('.js-btn-blue').on('click', addBlueBox);
    $('.js-btn-red').on('click', addRedBox);
    $('.js-btn-yellow').on('click', addYellowBox);
   
    $('.js-container').append(`<div class="box green"></div>`)
        .append(`<div class="box blue"></div>`)
        .append(`<div class="box red"</div>`)
        .append(`<div class="box yellow"</div>`);

}

function addGreenBox() {
    let numOfGreenBoxes = 0; 
    numOfGreenBoxes++; 
    $('.js-greenBlock-counter').text('Green Box Count: ' + numOfGreenBoxes); 
    $('.js-container').append(`<div class="box green"></div>`);   
}

function addBlueBox() {
    numOfBlueBoxes++; 
    $('.js-blueBlock-counter').text('Blue Box Count: ' + numOfBlueBoxes); 
    $('.js-container').append(`<div class="box blue"></div>`); 
}

function addRedBox() {
    numOfRedBoxes++;
    $('.js-redBlock-counter').text('Red Box Count: ' + numOfRedBoxes); 
    $('.js-container').append(`<div class="box red"></div>`); 
}

function addYellowBox() {
    numOfYellowBoxes++;
    $('.js-yellowBlock-counter').text('Yellow Box Count: ' + numOfYellowBoxes);  
    $('.js-container').append(`<div class="box yellow"></div>`); 


}