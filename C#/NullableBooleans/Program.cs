using System;
using System.Collections.Generic;

namespace NullableBooleans
{
    class Program
    {
        static void Main(string[] args)
        {
            var person1 = new Person();
            var person2 = new Person();
            var listOfPerson = new List<Person>();

            var numberOfPerson = listOfPerson.Count;

            if (numberOfPerson > 0)
            {
                person1.Adult = true;

                var value = person2.Adult;

                if (!(person2.Adult ?? false))
                {
                    System.Console.WriteLine("in if nulable code");
                }
                else
                {
                    System.Console.WriteLine("out of nulable code");
                }

            }
            else
            System.Console.WriteLine("List of people is empty");
        }
    }


}
