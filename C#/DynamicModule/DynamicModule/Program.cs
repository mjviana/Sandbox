// See https://aka.ms/new-console-template for more information

/*
    for every X element we want to to print true
    e.g: if a given value 5, it means that for every fifth element we want to prit true
*/

var random = new Random();


for (int i = 0; i < 10; i++)
{
    var randomElement = random.Next(1, 6);
    var randomTargetSize = random.Next(0, 51);

    System.Console.WriteLine($"iteration: {i}");
    System.Console.WriteLine($"Random X element: {randomElement}");
    System.Console.WriteLine($"Random list of elements size: {randomTargetSize}");
    System.Console.WriteLine($"result: {i}: {(randomTargetSize % randomElement == 0)}"); 
}


