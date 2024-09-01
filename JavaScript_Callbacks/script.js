// function myDislayer(some)
// {
//     document.getElementById("demo").innerHTML = some;
// }
// function myFirst()
// {
//     myDislayer("Hello");
// }
// function mySecond()
// {
//     myDislayer("Goodbye");
// }


// mySecond();
// myFirst();

function myDislayer(something)
{
    document.getElementById("demo").innerHTML = something;
}
function myCalculator(num1 , num2 , myCallback)
{
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5 ,  5 , myDislayer);

setTimeout(myFunction, 1000);

function myFunction()
{
    document.getElementById("emo").innerHTML = "Kavi!!"
}