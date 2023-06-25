import * as React from 'react'
import { Web3Modal } from '@web3modal/react'
import { ethereumClient, projectId } from '~/config/wallet-connect'
import { NftsProvider } from '~/components/NftsProvider'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <body>
      <NftsProvider>{children}</NftsProvider>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </body>
  )
}
