using System;

namespace DatetimeTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Number of days, please insert a initial date:");
            DateTime initialDate = DateTime.Parse(Console.ReadLine());

            System.Console.WriteLine(initialDate);
            var daysPassed = (DateTime.Now - initialDate).TotalDays;
            System.Console.WriteLine($"Number of days: {daysPassed}");
        }
    }
}
