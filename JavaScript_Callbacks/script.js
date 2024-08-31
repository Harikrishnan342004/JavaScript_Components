function myDislayer(some)
{
    document.getElementById("demo").innerHTML = some;
}
function myFirst()
{
    myDislayer("Hello");
}
function mySecond()
{
    myDislayer("Goodbye");
}


mySecond();
myFirst();