import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { WalletEntryPosition } from '@particle-network/auth';
import { BNBChain, BNBChainTestnet, Ethereum, EthereumGoerli, EthereumSepolia } from '@particle-network/chains';
import { evmWallets } from '@particle-network/connect';
import { ModalProvider } from '@particle-network/connect-react-ui';

import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css';

import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider
      walletSort={['Particle Auth', 'Wallet']}
      particleAuthSort={[
        'email',
        'phone',
        'google',
        'apple',
        'twitter',
        'twitch',
        'facebook',
        'microsoft',
        'linkedin',
        'github',
        'discord',
      ]}
      //TODO: get particle config from https://dashboard.particle.network/
      options={{
        projectId: import.meta.env.VITE_PROJECT_ID,
        clientKey: import.meta.env.VITE_APP_CLIENT_KEY,
        appId: import.meta.env.VITE_APP_ID,
        chains: [Ethereum, EthereumGoerli, EthereumSepolia, BNBChain, BNBChainTestnet],
        particleWalletEntry: {
          displayWalletEntry: true,
          defaultWalletEntryPosition: WalletEntryPosition.BR,
        },
        wallets: [
          ...evmWallets({
            projectId: import.meta.env.VITE_APP_WALLETCONNECT_PROJECT_ID,
            showQrModal: false,
          }),
        ],
      }}
      language="en"
      theme={'dark'}
    >
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <App />
      </QueryClientProvider>
    </ModalProvider>
  </React.StrictMode>,
)
