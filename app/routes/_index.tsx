import * as React from 'react'
import type { V2_MetaFunction } from '@remix-run/node'
import { NftGallery } from '~/components/NftGallery'
import { Panel } from '~/components/Panel'
import { WalletButton } from '~/components/WalletButton'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Remix NFT Gallery' }, { name: 'description', content: 'Connect your wallet!' }]
}

export default function Index() {
  return (
    <article className="gallery-view">
      <div className="gallery-view__wallet">
        <WalletButton />
      </div>

      <div className="gallery-view__gallery">
        <NftGallery />
      </div>

      <aside className="gallery-view__panel">
        <Panel />
      </aside>
    </article>
  )
}
