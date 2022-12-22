// using System;
using ElectronCgi.DotNet;
using Microsoft.Extensions.Logging;

namespace LibreHardwareMonitorService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var connection = new ConnectionBuilder()
                .WithLogging(minimumLogLevel: LogLevel.Trace, logFilePath: "the-log-file.txt")
                .Build();
            
            connection.On<string, string>("greeting", name => {
                var response = $"Hello {name}";
                return response;
            });
            
            connection.Listen();    
            //connection.OnAsync();
        }
    }
}
