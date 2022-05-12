using System;
using System.Linq;
using System.Collections.Generic;

namespace StringsAndForEach
{
    class Program
    {
        static void Main(string[] args)
        {
            var modulesList = new List<Module>(){
                new Module{Name = "a", Version = "1"},
                new Module{Name = "b", Version = "1"},
                new Module{Name = "c", Version = "1"},
                new Module{Name = "d", Version = "4"},
            };

            System.Console.WriteLine(Module.GetTextByList(modulesList));
            Console.ReadKey();
        }
    }

    public class Module
    {
        public string Name { get; set; }
        public string Version { get; set; }

        public static string GetTextByList(List<Module> modules)
        {
            string moduleList = "Modules installed: \n";

            moduleList += string.Join(
               " \n",
               modules.Select(m => m.Name + " Version: " + m.Version)
           );

            return moduleList;
        }
    }
}
