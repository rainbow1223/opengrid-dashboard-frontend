import { Logo, WorldMapImage } from "../../assets";
import { ConnectButton, Sidebar } from "../../components";

export function DataCenters() {
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
            <Sidebar active={4} />

            <section className="w-full lg:w-5/6 sm:h-[89%] flex-1 px-28 py-10">
              <div className="mt-10 flex justify-center border border-indigo-700/40 rounded-3xl py-10">
                <img src={WorldMapImage} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
