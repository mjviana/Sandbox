using System;

namespace EventTest
{
    public class PublishedEventEventArgs : EventArgs
    {
        public Guid Id { get; set; }
        public DateTimeOffset PublishDatetime { get; set; }

        public PublishedEventEventArgs()
        {
            Id = Guid.NewGuid();
            PublishDatetime = DateTimeOffset.UtcNow;
        }
    }
}