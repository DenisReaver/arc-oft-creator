// wagmi.ts
import { http, createConfig } from 'wagmi';
import { sepolia, baseSepolia, optimismSepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// ARC Testnet (кастомная сеть)
const arcTestnet = {
  id: 5042002,
  name: 'ARC Testnet',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: { default: { http: ['https://arc-testnet.drpc.org'] } },
  testnet: true,
} as const;

export const config = getDefaultConfig({
  appName: 'Morgen OFT Creator',
  projectId: '6cd43074381dca42cc0f029143e150c8',
  chains: [sepolia, baseSepolia, optimismSepolia, arcTestnet],
  transports: {
    [sepolia.id]: http('https://ethereum-sepolia-rpc.publicnode.com'),
    [baseSepolia.id]: http('https://sepolia.base.org'),
    [optimismSepolia.id]: http('https://sepolia.optimism.io'),     // официальный RPC Optimism Sepolia
    [arcTestnet.id]: http('https://arc-testnet.drpc.org'),
  },
  ssr: true,
});
