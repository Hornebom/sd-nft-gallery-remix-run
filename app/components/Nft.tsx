import { NFT } from 'declarations'
import * as React from 'react'
import { Nfts } from './NftsProvider'
import { cx } from '~/utils/classnames'

type NftProps = NFT & {
  activeId?: string
  setActiveId: (id?: string) => void
}

export function Nft({ name, image, tokenId, position, activeId, setActiveId }: NftProps) {
  const { ids, setIds } = React.useContext(Nfts)
  const [aspectRatio, setAspectRatio] = React.useState(1)
  const isActive = tokenId === activeId

  function handleClick() {
    setIds([tokenId, ...ids])

    setActiveId(isActive ? undefined : tokenId)
  }

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    const { naturalWidth, naturalHeight } = event.target as HTMLImageElement
    setAspectRatio(naturalWidth / naturalHeight)
  }

  return (
    <figure
      className={cx(['nft', isActive && 'nft--isActive'])}
      style={
        {
          '--aspect-ratio': aspectRatio,
          '--translate-x': `${position![0] * 200}%`,
          '--translate-y': `${position![1] * 200}%`,
          '--translate-z': `${position![2] * 200}px`,
        } as React.CSSProperties
      }
    >
      <img src={image.pngUrl} alt={name || ''} onLoad={(event) => handleLoad(event)} />
      <button onClick={handleClick} />
    </figure>
  )
}
