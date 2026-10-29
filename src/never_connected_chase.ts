import { Device, isInactiveDevice } from './device.types'

export function firstActiveDevice(devices: Device[]): Device | undefined {
  return devices.find(device => !isInactiveDevice(device))
}
