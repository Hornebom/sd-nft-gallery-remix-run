import { NFT } from 'declarations'
import * as React from 'react'

type CardProps = {
  nft: NFT
}

export function Card({ nft }: CardProps) {
  const { name, image } = nft

  return (
    <div className="card">
      <img src={image.pngUrl} alt={name || ''} loading="lazy" />
      {!!name && <h3 className="size-body weight-medium">{name}</h3>}
    </div>
  )
}
