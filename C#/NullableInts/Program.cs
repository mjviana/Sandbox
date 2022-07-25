// See https://aka.ms/new-console-template for more information
using NullableInts;

Console.WriteLine("Nullable ints!");

var listA = new List<NullableUser>{
    new NullableUser{
        Id = null,
        Name = "Alfredd"
    },
    new NullableUser{
        Id = 1,
        Name ="Bruce"
    },
    new NullableUser{
        Name = "Clark"
    }
};

List<User> listB = new List<User>();

listA.ForEach(e =>
{
    var usr = new User
    {
        Id = e.Id ?? 0,
        Name = e.Name
    };
    listB.Add(usr);
}
);

System.Console.WriteLine("List A");
listA.ForEach(e =>
{
    Console.WriteLine($"User -> {e.Id}, {e.Name}");
});

System.Console.WriteLine("List B");
listB.ForEach(e =>
{
    Console.WriteLine($"User -> {e.Id}, {e.Name}");
});
