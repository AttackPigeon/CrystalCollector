// Global variables

var wins= 0;
var losses=0;
var targetNumber= makeNumber(19,120);
var myNumber=0;

function makeNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};
console.log(targetNumber)

$('#targetNumber').append(targetNumber)

$('#blue').attr('data-random', makeNumber(1,12)) 
$('#green').attr('data-random', makeNumber(1,12))
$('#red').attr('data-random', makeNumber(1,12))
$('#yellow').attr('data-random', makeNumber(1,12))

function calcWins() {
    if (myNumber===targetNumber) {
        wins++ 
        $('#wins').append(wins)
        alert('You won! Good job! Cookie?')
    }else if(myNumber>targetNumber) {
        losses++
        $("losses").append(losses)
        alert("You lost, no cookies!")
    }

}

$('#blue').click(function() {

console.log($(this).data('random'))
addNumber($(this).data('random'))
});

var addNumber= function(clickedOn){
    myNumber+=clickedOn
    $('#myNumber').text(myNumber)
}

