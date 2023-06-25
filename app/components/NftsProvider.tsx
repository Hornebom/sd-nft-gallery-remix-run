import { NFT } from 'declarations'
import * as React from 'react'
import { useFetcher } from '@remix-run/react'
import { useAccount } from 'wagmi'

type HistoryItem = NFT['tokenId']

export type NftsContext = {
  nfts: NFT[]
  setNfts: (items: NFT[]) => void
  isLoading: boolean
  ids: HistoryItem[]
  setIds: (items: HistoryItem[]) => void
}

const defaultContext = {
  nfts: [],
  setNfts() {},
  isLoading: false,
  ids: [],
  setIds() {},
}

export const Nfts = React.createContext<NftsContext>(defaultContext)

export function NftsProvider({ children }: { children: React.ReactNode }) {
  const [nfts, setNfts] = React.useState<NFT[]>([])
  const [ids, setIds] = React.useState<HistoryItem[]>([])

  const fetcher = useFetcher()
  const { address } = useAccount()

  React.useEffect(() => {
    fetcher.submit(
      {
        ...(address && { owner: address }),
      },
      { method: 'get', action: '/api/nfts' }
    )
  }, [address])

  React.useEffect(() => setNfts((fetcher.data as NFT[]) || []), [fetcher.data])

  return (
    <Nfts.Provider value={{ nfts, setNfts, isLoading: fetcher.state !== 'idle', ids, setIds }}>
      {children}
    </Nfts.Provider>
  )
}
