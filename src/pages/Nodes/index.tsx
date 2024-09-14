import { useAccount } from "wagmi";

import { Logo } from "../../assets";
import {
  ConnectButton,
  ConnectWalletSection,
  DeployNodeSection,
  Sidebar,
} from "../../components";

export function Nodes() {
  const { address } = useAccount();

  return (
    <>
      <div>
        <main className="flex flex-col min-h-dvh">
          <nav className="flex justify-between items-center px-5 py-3 bg-black border-b border-indigo-900/50">
            <div>
              <img src={Logo} />
            </div>
            <div className="">
              <ConnectButton />
            </div>
          </nav>

          <div className="lg:flex flex-1 bg-black">
            <Sidebar active={3} />

            <section className="w-full lg:w-5/6 sm:h-[89%] flex-1">
              {address ? <DeployNodeSection /> : <ConnectWalletSection />}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
