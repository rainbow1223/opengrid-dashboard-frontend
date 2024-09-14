import { http, createConfig } from "wagmi";
import { mainnet, base, bsc } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

export const projectId = import.meta.env.VITE_APP_PROJECT_ID;

export const config = createConfig({
  chains: [mainnet, base, bsc],
  // @ts-ignore
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, showQrModal: false }),
    injected({ shimDisconnect: true }),
  ],
});
