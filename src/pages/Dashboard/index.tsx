import { useAccount } from "wagmi";

import { DashboardBannerImage, Logo } from "../../assets";
import {
  ConnectButton,
  ConnectWalletSection,
  DeployVPSSection,
  Sidebar,
} from "../../components";

export function Dashboard() {
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
            <Sidebar active={1} />

            <section className="w-full lg:w-5/6 sm:h-[89%] flex-1">
              <div className="my-10 mx-auto max-w-6xl bg-indigo-500/30 rounded-xl">
                <img className="h-72 container rounded-2xl opacity-70" src={DashboardBannerImage} />
              </div>

              {address ? <DeployVPSSection /> : <ConnectWalletSection />}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
