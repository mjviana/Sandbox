using System;

namespace EventTest
{
    public class Subscriber
    {
        public string Name { get; set; }
        public void OnPublished(object sender, PublishedEventEventArgs e)
        {
            System.Console.WriteLine($" \n {nameof(Subscriber)} ");
            System.Console.WriteLine($" \n Hey {this.Name}! The publisher that you subscribe, just plublished something new! \n Here are the details: \n \t Id: {e.Id} \n \t Datetime: {e.PublishDatetime}.");
        }
    }
}