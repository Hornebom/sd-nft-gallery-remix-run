import { Address } from 'declarations'

export function cropAddress(address: Address) {
  return `${address.slice(0, 7)}…${address.slice(-4)}`
}
