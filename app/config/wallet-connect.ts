import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";

export const chains = [mainnet];
export const projectId = "db0aa19ffe9ca3c335d5b289b27203de";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, chains);
