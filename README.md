# Desktop-Hardware-Monitor
A desktop hardware monitor built with Electron + React + Typescript. 
Also will use a C# console application running the LibreHardwareMonitor library to retrieve the current stats from the host computer.
- Originally planned to use OpenHardwareMonitor but it currently has issues retrieving information from AMD Cpu's and GPU's.

## Build Info
- The electron application was initialized using `yarn create electron-app my-new-app --template=webpack-typescript`
- The application is packaged and will be distributed using [Electron Forge](https://www.electronforge.io/).

## Styles and Themes
- Styling is done using sass/scss 
- Themes are done using a theme-aware [mixin](https://github.com/aapaetsch/Desktop-Hardware-Monitor/blob/master/src/styles/_mixins.scss) that is called in by css classes requiring a theme specific variable
- Themes are applied by calling the theme name on the main body element of the application
- Theme specific variables are held [here](https://github.com/aapaetsch/Desktop-Hardware-Monitor/blob/master/src/styles/_themes.scss)

## Additional Resources
- LibreHardwareMonitor Github Project can be found [here](https://github.com/LibreHardwareMonitor/LibreHardwareMonitor).
