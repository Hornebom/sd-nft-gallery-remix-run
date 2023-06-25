import { json } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import { fetchNfts } from '~/models/nft.server'

// GET
export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const owner = url.searchParams.get('owner')

  if (!owner) {
    // throw json({ statusText: 'Not found' }, { status: 404 })
    return json([])
  }

  try {
    const nfts = await fetchNfts(owner)

    return json(nfts)
  } catch (error) {
    throw json({ statusText: 'Not found' }, { status: 404 })
  }
}
