// using System;
using ElectronCgi.DotNet;
using LibreHardwareMonitor.Hardware;
using LibreHardwareMonitorDTOs;
using Microsoft.Extensions.Logging;
using System;

namespace LibreHardwareMonitorService
{
    public class Program
    {

        private ComputerHardwareSettingsDTO _computerHardwareMonitoringSettings { get; set; }
        private LibreHardwareMonitorWrapper _libreHardwareMonitorWrapper = new LibreHardwareMonitorWrapper();
        public static void Main(string[] args)
        {
            _libreHardwareMonitorWrapper.InitVisitor();
            var connection = new ConnectionBuilder()
                .WithLogging(minimumLogLevel: LogLevel.Trace, logFilePath: "the-log-file.txt")
                .Build();
                
            connection.On<string, string>("greeting", name => {
                var response = $"Hello {name}";
                return response;
            });
            connection.Listen();
        }

        public void SetupComputerSettingListeners(Connection connection)
        {

            SetConnectionString("Enable", true, connection);
            SetConnectionString("Disable", false, connection);
            connection.On<string, string>("UpdateSettings", _ => {
                try {
                    _libreHardwareMonitorWrapper.updateComputerSettings(_computerHardwareMonitoringSettings);
                    return ComputerHardwareStatus.Success.ToString();
                } catch {
                    Console.WriteLine("Error updating computer settings");
                }
                return ComputerHardwareStatus.Warning.ToString();
            });
        }

        public void SetConnectionString(string prefix, bool isEnabled, Connection connection) 
        {
            connection.On<string>($"{prefix}CPU", _ => _computerHardwareMonitoringSettings.EnableCPU = isEnabled);
            connection.On<string>($"{prefix}GPU", _ => _computerHardwareMonitoringSettings.EnableGPU = isEnabled);
            connection.On<string>($"{prefix}Memory", _ => _computerHardwareMonitoringSettings.EnableMemory = isEnabled);
            connection.On<string>($"{prefix}Network", _ => _computerHardwareMonitoringSettings.EnableNetwork = isEnabled);
            connection.On<string>($"{prefix}Storage", _ => _computerHardwareMonitoringSettings.EnableStorage = isEnabled);
            connection.On<string>($"{prefix}Motherboard", _ => _computerHardwareMonitoringSettings.EnableMotherboard = isEnabled);
            connection.On<string>($"{prefix}All", _ => {
                _computerHardwareMonitoringSettings.EnableCPU = isEnabled;
                _computerHardwareMonitoringSettings.EnableGPU = isEnabled;
                _computerHardwareMonitoringSettings.EnableMemory = isEnabled;
                _computerHardwareMonitoringSettings.EnableNetwork = isEnabled;
                _computerHardwareMonitoringSettings.EnableStorage = isEnabled;
                _computerHardwareMonitoringSettings.EnableMotherboard = isEnabled;
            });
            // connection.On<string>($"{prefix}PSU", _ => _computerHardwareMonitoringSettings.EnablePSU = isEnabled);
        }
    }
}
