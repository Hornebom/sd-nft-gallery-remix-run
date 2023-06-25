import * as React from 'react'
import { NFT } from 'declarations'
import { Nfts } from './NftsProvider'
import { Card } from './Card'

export function Panel() {
  const { ids, nfts } = React.useContext(Nfts)

  const visited = React.useMemo(() => ids.map((id) => nfts.find(({ tokenId }) => tokenId === id)!), [ids])

  return (
    <aside className="panel">
      <h2 className="size-body weight-bold">History</h2>

      {nfts.length > 0 && (
        <ol role="list">
          {visited.map((nft, index) => (
            <li key={`${nft.tokenId}${index}`}>
              <Card nft={nft} />
            </li>
          ))}
        </ol>
      )}
    </aside>
  )
}
