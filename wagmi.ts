// wagmi.ts
import { http, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// ARC Testnet
const arcTestnet = {
  id: 5042002,
  name: 'ARC Testnet',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: { default: { http: ['https://arc-testnet.drpc.org'] } },
  testnet: true,
} as const;

export const config = getDefaultConfig({
  appName: 'Morgen OFT Creator',
  projectId: '6cd43074381dca42cc0f029143e150c8', // ← Замени на свой!
  chains: [sepolia, arcTestnet],
  transports: {
    [sepolia.id]: http('https://ethereum-sepolia-rpc.publicnode.com'),
    [arcTestnet.id]: http('https://arc-testnet.drpc.org'),
  },
  ssr: true,
});