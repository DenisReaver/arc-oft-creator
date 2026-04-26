// wagmi.ts
import { http, createConfig } from 'wagmi';
import { sepolia, baseSepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// ARC Testnet (CASTOM NETWORK)
const arcTestnet = {
  id: 5042002,
  name: 'ARC Testnet',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: { default: { http: ['https://arc-testnet.drpc.org'] } },
  testnet: true,
} as const;

export const config = getDefaultConfig({
  appName: 'Morgen OFT Creator',
  projectId: '6cd43074381dca42cc0f029143e150c8', // MY ID PROHECT
  chains: [sepolia, baseSepolia, arcTestnet],     // 
  transports: {
    [sepolia.id]: http('https://ethereum-sepolia-rpc.publicnode.com'),
    [baseSepolia.id]: http('https://sepolia.base.org'),     // RPC Base Sepolia
    [arcTestnet.id]: http('https://arc-testnet.drpc.org'),
  },
  ssr: true,
});
