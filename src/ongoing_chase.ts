import { Device, isInactiveDevice } from './device.types'

export function activeDevices(devices: Device[]): Device[] {
  return devices.filter(device => !isInactiveDevice(device))
}
