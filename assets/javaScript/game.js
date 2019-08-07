// Global variables

var wins= 0;
var losses=0;
var targetNumber= makeNumber(19,120);
var myNumber=0;

var addNumber= function(clickedOn){
    myNumber+=clickedOn
    $('#myNumber').text(myNumber)
}

function makeNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};
console.log(targetNumber)



function init() {
    $('#blue').attr('data-random', makeNumber(1,12)) 
    $('#green').attr('data-random', makeNumber(1,12))
    $('#red').attr('data-random', makeNumber(1,12))
    $('#yellow').attr('data-random', makeNumber(1,12))

    myNumber=0
    $('#myNumber').text(myNumber)

    targetNumber= makeNumber(19,120)
    $('#targetNumber').text(targetNumber)
}
 
init()

function calcWins() {
    if (myNumber===targetNumber) {
        wins++,
        $('#wins').text(wins)
        alert('You won! Good job!')
        init()
    }else if(myNumber>targetNumber) {
        losses++,
        $("#losses").text(losses)
        alert("You lost! Try again!")
        init()
    }
}

$('#blue').click(function() {  
    console.log($(this).data('random'))
    addNumber($(this).data('random'))
    calcWins()
});

$('#green').click(function() {
    console.log($(this).data('random'))
    addNumber($(this).data('random'))
    calcWins()
});

$('#red').click(function() {
    console.log($(this).data('random'))
    addNumber($(this).data('random'))
    calcWins() 
});

$('#yellow').click(function() {
    console.log($(this).data('random'))
    addNumber($(this).data('random'))
    calcWins()
});



