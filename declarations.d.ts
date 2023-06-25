export type Address = `0x${string}` | string

export type NFT = {
  name?: string
  description?: string
  image: {
    pngUrl?: string
  }
  tokenId: string
  position?: number[]
}
