using System;
using System.Threading;

namespace EventTest
{
    public class Publisher
    {



        // Old way
        // public delegate void PublishedEventHandler(object sender, PublishedEventEventArgs e);
        // public event PublishedEventHandler Published;

        // New way
        public event EventHandler<PublishedEventEventArgs> Published;

        public void Publish()
        {
            System.Console.WriteLine($" \n {nameof(Publisher)}");
            System.Console.WriteLine(" \n We are publishing something new...");

            Thread.Sleep(3000);

            OnPublished();
        }

        protected virtual void OnPublished()
        {
            System.Console.WriteLine($" \n {nameof(Publisher)}");
            System.Console.WriteLine("\n It's oficial! \n We got something new!\n");
            Published?.Invoke(this, new PublishedEventEventArgs());
        }
    }
}