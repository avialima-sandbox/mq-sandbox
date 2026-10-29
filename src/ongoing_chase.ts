import { Device } from './device.types'

export function activeDevices(devices: Device[]): Device[] {
  return devices.filter(device => device.status === 'active')
}
