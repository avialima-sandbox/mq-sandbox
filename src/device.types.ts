export interface Device {
  id: string
  status: 'active' | 'inactive'
}

export function isInactiveDevice(device: Device): boolean {
  return device.status === 'inactive'
}
