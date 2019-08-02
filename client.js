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
    let element = $('.js-input-green').val(); 
    if (element == "") {
        element = 1; 
        numOfGreenBoxes++;  
    } else { 
        element = parseInt(element); 
        numOfGreenBoxes = numOfGreenBoxes + element;
    }
    console.log(element); 

    $('.js-greenBlock-counter').text('Green Box Count: ' + numOfGreenBoxes);
    for(let i = 0; i < element; i++) {
    $('.js-container').append(`<div class="box green"></div>`); 
    }
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
}// end removeGreenBox function 

function removeBlueBox() {
    numOfBlueBoxes--; 
    $(this).remove();  
    $('.js-blueBlock-counter').text('Blue Box Count: ' + numOfBlueBoxes);
}//end removeBlueBox function 

function removeRedBox() {
    numOfRedBoxes--; 
    $(this).remove();  
    $('.js-redBlock-counter').text('Red Box Count: ' + numOfRedBoxes);
}//end removeRedBox function 

function removeYellowBox() {
    numOfYellowBoxes--; 
    $(this).remove();  
    $('.js-yellowBlock-counter').text('Yellow Box Count: ' + numOfYellowBoxes);
}//end removeYellowBox function 
