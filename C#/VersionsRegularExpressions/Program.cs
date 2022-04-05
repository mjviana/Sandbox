using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace VersionsRegularExpressions
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            string minimumVersion = "1.4";
            string versionToCompare = "Version 1.4.4.333";

            System.Console.WriteLine($"Minimum Version: {minimumVersion}");
            System.Console.WriteLine($"Version to compare: {versionToCompare}");

            System.Console.WriteLine($"Is above minimum version?  {IsAboveMinimumVersion(minimumVersion, versionToCompare)}");
        }

        private static bool IsAboveMinimumVersion(string requiredPackageMinimumVersion, string repositoryVersion)
        {
            if (!string.IsNullOrWhiteSpace(requiredPackageMinimumVersion) && !string.IsNullOrWhiteSpace(repositoryVersion))
            {
                var pattern = @"(\d(\.\d+)+)$";
                Regex regex = new Regex(pattern);

                if (regex.IsMatch(repositoryVersion))
                {
                    Match matchedValue = regex.Match(repositoryVersion);
                    var versionToCompare = matchedValue.Groups[1].Value;

                    var requiredMinimiumVersionArray = requiredPackageMinimumVersion.Split('.');
                    var versionToCompareArray = versionToCompare.Split('.');

                    for (int i = 0; i < versionToCompareArray.Length; i++)
                    {
                        int minimumValue = -1;
                        int valueToCompare = -1;
                        var isMinimumValueConverted = int.TryParse(requiredMinimiumVersionArray.ElementAtOrDefault(i), out minimumValue);
                        var isValueToCompareConverted = int.TryParse(versionToCompareArray.ElementAtOrDefault(i), out valueToCompare);
                        
                        if (valueToCompare > minimumValue)
                            return true;
                        if (valueToCompare < minimumValue)
                            return false;
                    }
                }
                return false;
            }
            return false;
        }
    }
}
