import * as React from 'react'
import { Nft } from './Nft'
import { Nfts } from './NftsProvider'
import { NFT } from 'declarations'

export function NftGallery() {
  const { nfts, isLoading } = React.useContext(Nfts)
  const [activeId, setActiveId] = React.useState<string | undefined>(undefined)

  return (
    <>
      {nfts.length > 0 && (
        <ol className="gallery" role="list">
          {nfts.map((nft: NFT, index: number) => (
            <li key={`${nft.tokenId}${index}`}>
              <Nft {...nft} activeId={activeId} setActiveId={setActiveId} />
            </li>
          ))}
        </ol>
      )}
      {isLoading && <strong>...loading</strong>}
    </>
  )
}
