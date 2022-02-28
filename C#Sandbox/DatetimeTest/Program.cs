using System;

namespace DatetimeTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var datetime = DateTime.Now;
            var datetimeUtc = DateTime.UtcNow;
            var datetimeOffset = DateTimeOffset.Now;
            var datetimeOffsetUtc = DateTimeOffset.UtcNow;
            Console.WriteLine("datetime: " + datetime);
            Console.WriteLine("datetimeUtc: " + datetimeUtc);
            Console.WriteLine("datetimeOffset: " + datetimeOffset);
            Console.WriteLine("datetimeOffsetUtc: " + datetimeOffsetUtc);
            Console.ReadLine();
        }
    }
}
