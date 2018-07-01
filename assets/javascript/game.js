var randChoice;
var crystalOneRndm;
var crystalTwoRndm;
var crystalThreeRndm;
var crystalFourRndm;
var count=0;
var wins = 0;
var losses =0;
//plug in the variable, spits out random number for it
function randNum(differentRand){
   differentRand = Math.floor(Math.random() * ((120-19)+1) + 19);
   return differentRand;

}
function randNumTwo(differentRand){
    differentRand =differentRand = Math.floor(Math.random() * ((12-1)+1) + 1);
    return differentRand;
}
//assigns random numbers to all the variables
function game(){
count=0;
randChoice = randNum(randChoice);
crystalOneRndm = randNumTwo(crystalOneRndm);
crystalTwoRndm = randNumTwo(crystalTwoRndm);
crystalThreeRndm =randNumTwo(crystalThreeRndm);
crystalFourRndm = randNumTwo(crystalFourRndm);
$('#buttonOne').data('num', crystalOneRndm); 
$('#buttonTwo').data('num', crystalTwoRndm); 
$('#buttonThree').data('num', crystalThreeRndm); 
$('#buttonFour').data('num', crystalFourRndm); 

$('#randomNum').text(randChoice);


}
game();
console.log(randChoice);





function getvalue() {
    
    var button = $(this);
    test = button.data('num');
    count = count + button.data('num');
    console.log(test);
    console.log(count);
    $('#score').text(count);
    if(count == randChoice){
        wins++;
        $('#wins').text(wins);
        count=0;
        $('#score').text(count);
        game();

    }else if(count > randChoice){
        losses++;
        $('#losses').text(losses);
        count=0;
        $('#score').text(count);
        game();
        
    }

    
}

$('.img').on('click', getvalue);







