import { Address, NFT } from 'declarations'

export async function fetchNfts(owner: Address) {
  try {
    if (!owner) {
      return []
    }

    const searchParams = new URLSearchParams({
      owner, // or: your wallet address
      withMetadata: 'true',
      pageSize: '100',
    })

    const url = new URL(
      `/nft/v3/${process.env.ALCHEMY_API_KEY}/getNFTsForOwner?${searchParams}`,
      'https://eth-mainnet.g.alchemy.com'
    )

    const response = await fetch(url)

    if (!response.ok) {
      console.log("response not ok fetching nft's")

      return []
    }

    const data = (await response.json()) as {
      ownedNfts: NFT[]
    }

    if (!data?.ownedNfts.length) {
      return []
    }

    const radius = 1

    const filtered = data.ownedNfts
      ?.map(({ name, description, image, tokenId }) => ({
        name,
        description,
        image,
        tokenId,
      }))
      .filter(({ image }) => image.pngUrl)

    const nfts = filtered.map(({ image, ...rest }, index) => {
      const angle = (index * (2 * Math.PI)) / filtered.length
      const position = [radius * Math.cos(angle), radius * Math.sin(angle), Math.random() * -1]

      return {
        ...rest,
        image: {
          pngUrl: `${image.pngUrl}.png`,
        },
        position,
      }
    })

    return nfts
  } catch (error) {
    console.log('error', error)

    return []
  }
}
