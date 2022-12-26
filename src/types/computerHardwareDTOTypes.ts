export interface ComputerHardwareSettingsDTO {
    EnableGPU: boolean;
    EnableCPU: boolean;
    EnableMemory: boolean;
    EnableNetwork: boolean;
    EnableStorage: boolean;
    EnableMotherboard: boolean;
}

export enum ComputerHardwareStatus {
    Failure = 0,
    Success = 1,
    Warning = 2,
}
