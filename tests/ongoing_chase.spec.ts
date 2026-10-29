import { activeDevices } from '../src/ongoing_chase'

const result: number = activeDevices([{ id: '1', status: 'active' }]).length
export { result }
