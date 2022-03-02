using System;

namespace EventTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Publisher publisher = new();
            Subscriber subscriber1 = new()
            {
                Name = "Mário"
            };
            Subscriber subscriber2 = new()
            {
                Name = "Viana"
            };

            publisher.Published += subscriber1.OnPublished;
            publisher.Published += subscriber2.OnPublished;
            publisher.Published += OnPusblished;

            publisher.Publish();
        }

        private static void OnPusblished(object sender, PublishedEventEventArgs e)
        {
            System.Console.WriteLine("\nOnPublished notification on Main Subscriber: \n" + 
            $" \t Details: \n \t\tID: {e.Id} \n \t\tDate: {e.PublishDatetime.ToString("F")}");
        }
    }
}
