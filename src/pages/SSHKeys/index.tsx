import { useAccount } from "wagmi";

import { Logo } from "../../assets";
import {
  ConnectButton,
  ConnectWalletSection,
  SSHKeySection,
  Sidebar,
} from "../../components";

export function SSHKeys() {
  const { address } = useAccount();

  return (
    <>
      <div>
        <main className="flex flex-col min-h-dvh">
          <nav className="flex justify-between items-center px-5 py-3 bg-black border-b border-indigo-900/50">
            <div>
              <img src={Logo} />
            </div>

            <div className="flex gap-2 items-center">
              <div className="w-20">
                <p className="text-indigo-500/50 text-sm">Balance</p>
                <p className="mt-px text-white text-sm font-medium">0 $GRID</p>
              </div>
              <ConnectButton />
            </div>
          </nav>

          <div className="lg:flex flex-1 bg-black">
            <Sidebar active={9} />

            <section className="w-full lg:w-5/6 sm:h-[89%] flex-1">
              {address ? <SSHKeySection /> : <ConnectWalletSection />}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
