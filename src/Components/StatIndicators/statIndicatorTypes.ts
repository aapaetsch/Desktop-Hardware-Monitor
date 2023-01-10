export enum MagnitudeUnits {
    Percent = "%",
    GB = "GB",
    MB = "MB",
    KB = "KB",
    TB = "TB",
    PB = "PB",
}

export enum FrequencyUnits {
    Hertz = "Hz",
    KiloHertz = "KHz",
    MegaHertz = "MHz",
    GigaHertz = "GHz",
}

export enum TemperatureUnits {
    Celsius = "°C",
    Fahrenheit = "°F",
    Kelvin = "K",
}

export interface StatIndicatorLabelProps {
    value: number | string;
    units: MagnitudeUnits | FrequencyUnits | TemperatureUnits | null;
    size?: Size;
}

export enum Size {
    Tiny = "Tiny",
    Small = "Small",
    Regular = "Regular",
    Medium = "Medium",
    Large = "Large",
}
