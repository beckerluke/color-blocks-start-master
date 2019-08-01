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
    
    $('.js-container').on('click', '.green', removeGreenBox);
    $('.js-container').on('click', '.red', removeRedBox);
    $('.js-container').on('click', '.blue', removeBlueBox);
    $('.js-container').on('click', '.yellow', removeYellowBox);

}//end init function 

function addGreenBox() {
    numOfGreenBoxes++; 
    $('.js-greenBlock-counter').text('Green Box Count: ' + numOfGreenBoxes); 
    $('.js-container').append(`<div class="box green"></div>`);   
}//end addGreenBox function 

function addBlueBox() {
    numOfBlueBoxes++; 
    $('.js-blueBlock-counter').text('Blue Box Count: ' + numOfBlueBoxes); 
    $('.js-container').append(`<div class="box blue"></div>`); 
}//end addBlueBox function

function addRedBox() { 
    numOfRedBoxes++;
    $('.js-redBlock-counter').text('Red Box Count: ' + numOfRedBoxes); 
    $('.js-container').append(`<div class="box red"></div>`); 
}//end addRedBox function

function addYellowBox() {
    numOfYellowBoxes++;
    $('.js-yellowBlock-counter').text('Yellow Box Count: ' + numOfYellowBoxes);  
    $('.js-container').append(`<div class="box yellow"></div>`); 
} //end addYellowBox function 

function removeGreenBox() { 
    numOfGreenBoxes--; 
    $(this).remove();  
    $('.js-greenBlock-counter').text('Green Box Count: ' + numOfGreenBoxes);
}

function removeBlueBox() {
    numOfBlueBoxes--; 
    $(this).remove();  
    $('.js-blueBlock-counter').text('Blue Box Count: ' + numOfBlueBoxes);
}

function removeRedBox() {
    numOfRedBoxes--; 
    $(this).remove();  
    $('.js-redBlock-counter').text('Red Box Count: ' + numOfRedBoxes);
}

function removeYellowBox() {
    numOfYellowBoxes--; 
    $(this).remove();  
    $('.js-yellowBlock-counter').text('Yellow Box Count: ' + numOfYellowBoxes);
}
