import * as React from 'react'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { cropAddress } from '~/utils/cropAddress'
import { useHydrated } from 'remix-utils'

export function WalletButton() {
  const hydrated = useHydrated()
  const { open } = useWeb3Modal()
  const { address } = useAccount()

  return (
    <button className="button" onClick={open}>
      {!hydrated || !address ? 'Connect' : cropAddress(address)}
    </button>
  )
}
