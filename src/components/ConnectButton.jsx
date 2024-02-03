import React, { useCallback, useEffect } from 'react';
// import EvmDemo from './connect-evm-demo';
import {
    // Chain,
    ConnectButton,
    useAccount,
    useConnectKit,
    useParticleTheme,
    useSwitchChains,
    useParticleProvider,
    useLanguage,
} from '@particle-network/connect-react-ui';

// import '@particle-network/connect-react-ui/dist/index.css';
// import { LoginOptions } from '@particle-network/auth';

function ParticleConnectButton() {
    const account = useAccount();
    const connectKit = useConnectKit();
    const { theme, setTheme } = useParticleTheme();
    const { language, changLanguage } = useLanguage();

    const provider = useParticleProvider();

    const { isSwtichChain, renderChains } = useSwitchChains();

    useEffect(() => {
        async function chainChanged(chain) {
            console.log('DEMO-onChainChanged：', chain);
        }
        if (connectKit) {
            connectKit.on('chainChanged', chainChanged);
            return () => {
                connectKit.removeListener('chainChanged', chainChanged);
            };
        }
    }, [connectKit]);

    const LogRenderChains = useCallback(() => {
        console.log('isSwtichChain:', isSwtichChain);
        console.log('renderChains:', renderChains);
    }, [renderChains, isSwtichChain]);

    return (
        <div className='rounded-3xl px-7 py-3 text-white text-sm font-medium  cursor-pointer bg-gray-600 hover:bg-gray-800 ease-in transition-all'>
            <ConnectButton></ConnectButton>
            {/* {account && <EvmDemo />} */}
        </div>
    );
}

export default ParticleConnectButton;

{/* <ConnectButton.Custom>
                {({ account, accountLoading, chain, openAccountModal, openConnectModal, openChainModal }) => {
                    return (
                        <div>
                            <button onClick={openConnectModal} disabled={!!account}>
                                Open Connect
                            </button>
                            <br />
                            <br />
                            <button onClick={openAccountModal} style={{ marginLeft: 10 }} disabled={!account}>
                                Open Account
                            </button>
                            <br />
                            <br />
                            <button onClick={openChainModal} style={{ marginLeft: 10 }} disabled={!account}>
                                Open Switch Network
                            </button>

                            <div>
                                <h3>{`isSwtichChain: ${isSwtichChain}`}</h3>
                            </div>

                            <button onClick={LogRenderChains} style={{ marginLeft: 10 }}>
                                Log RenderChains
                            </button>

                            <div>
                                <h3>chain</h3>
                                <p>{JSON.stringify(chain ?? {})}</p>
                            </div>
                        </div>
                    );
                }}
            </ConnectButton.Custom> */}