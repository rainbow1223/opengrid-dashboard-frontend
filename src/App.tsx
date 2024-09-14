import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { Billing, Dashboard, DataCenters, Nodes, SSHKeys, VPS } from "./pages";
import { config, projectId } from "./config";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
  themeVariables: {
    "--w3m-color-mix": "#0d1524",
    "--w3m-accent": "#00afea",
    "--w3m-border-radius-master": "2px",
  },
});

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/gpu" element={<VPS />} />
            <Route path="/nodes" element={<Nodes />} />
            <Route path="/data-centers" element={<DataCenters />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/ssh-keys" element={<SSHKeys />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
