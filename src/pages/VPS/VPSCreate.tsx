import { useState } from "react";
import { LuCpu, LuMemoryStick, LuMinus, LuPlus } from "react-icons/lu";

import { Logo, LogoMini } from "../../assets";
import {
  ConnectButton,
  Sidebar,
  AddSSHKeyModal,
  LowBalanceModal,
} from "../../components";

export function VPSCreate() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenLowBalanceModal, setOpenLowBalanceModal] = useState(false);

  return (
    <>
      <div>
        <main className="flex flex-col min-h-dvh">
          <nav className="flex justify-between items-center px-5 py-3 bg-black border-b border-indigo-950/50">
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
            <Sidebar active={-1} />

            <section className="w-full lg:w-5/6 sm:h-[89%] flex-1 px-28 py-10">
              <div className="mx-auto max-w-6xl">
                <div className="flex items-center gap-2">
                  <img className="w-12" src={LogoMini} />
                  <h1 className="text-white font-semibold text-3xl">
                    Create GPU
                  </h1>
                </div>

                <p className="text-indigo-400">
                  Configure and Deploy GPU to the Network.
                </p>

                <div className="mt-6 flex gap-10">
                  <div className="w-[60%]">
                    <section className="border border-indigo-950 rounded-lg p-6">
                      <h3 className="text-white text-lg font-medium">
                        GPU Name
                      </h3>

                      <p className="mt-3 text-sm text-indigo-400">
                        Choose a name for your Virtual Private Server.
                      </p>

                      <input
                        className="w-full mt-5 border border-indigo-950 rounded-lg px-3 py-1.5 bg-black text-sm text-white"
                        placeholder="echo-gpu"
                      />

                      <p className="mt-1 text-sm text-indigo-400">
                        *should only contain alphanumeric characters and
                        hyphens.
                      </p>
                    </section>

                    <section className="mt-5 border border-indigo-950 rounded-lg p-6">
                      <h3 className="text-white text-lg font-medium">
                        Computing
                      </h3>

                      <p className="mt-3 text-sm text-indigo-400">
                        Configure your specifications such as GPU, CPU, and RAM.
                      </p>

                      <h3 className="mt-5 font-medium text-white">GPU Modal</h3>

                      <input
                        className="mt-1 w-full border border-indigo-950 rounded-lg px-3 py-1.5 bg-black text-sm text-white"
                        value="No GPU"
                      />

                      <h3 className="mt-5 font-medium text-white"># of GPUs</h3>
                      <input
                        className="mt-2 w-full range-slider"
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                      />

                      <div className="flex gap-3">
                        <div>
                          <h3 className="mt-5 font-medium text-white">vCPUs</h3>
                          <div className="mt-2 flex items-center gap-1">
                            <button className="border border-indigo-950 p-2 rounded-full">
                              <LuMinus className="text-white" />
                            </button>

                            <input
                              className="w-20 bg-black border border-indigo-950 rounded-lg px-3 py-1.5 text-white"
                              value="4"
                            />

                            <button className="border border-indigo-950 p-2 rounded-full">
                              <LuPlus className="text-white" />
                            </button>
                          </div>
                        </div>

                        <div>
                          <h3 className="mt-5 font-medium text-white">
                            Memory (GiB)
                          </h3>
                          <div className="mt-2 flex items-center gap-1">
                            <button className="border border-indigo-950 p-2 rounded-full">
                              <LuMinus className="text-white" />
                            </button>

                            <input
                              className="w-20 bg-black border border-indigo-950 rounded-lg px-3 py-1.5 text-white"
                              value="10"
                            />

                            <button className="border border-indigo-950 p-2 rounded-full">
                              <LuPlus className="text-white" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <h3 className="mt-3 text-white">Storage</h3>
                      <p className="mt-1 text-sm text-indigo-400">
                        Boot Disk Size (GiB)
                      </p>

                      <div className="flex items-center gap-3">
                        <input
                          className="mt-2 w-full range-slider"
                          type="range"
                          min="1"
                          max="6"
                          step="1"
                        />

                        <input
                          className="w-20 bg-black border border-indigo-950 rounded-lg px-3 py-1.5 text-white"
                          value="32"
                        />
                      </div>
                    </section>

                    <section className="mt-5 border border-indigo-950 rounded-lg p-6">
                      <h3 className="text-white text-lg font-medium">
                        Data Center
                      </h3>

                      <p className="mt-3 text-sm text-indigo-400">
                        This is the default network region where your Virtual
                        Private Server will be situated, influencing its
                        performance based on your specific use case. It's
                        advisable to select a region that aligns closely with
                        your operational requirements.
                      </p>

                      <input
                        className="mt-3 w-full border border-indigo-950 rounded-lg px-3 py-1.5 bg-black text-sm text-white"
                        value="Select a Data Center"
                      />
                    </section>

                    <section className="mt-5 border border-indigo-950 rounded-lg p-6">
                      <h3 className="text-white text-lg font-medium">
                        Operating System
                      </h3>

                      <p className="mt-3 text-sm text-indigo-400">
                        The operating system selected here will come
                        pre-installed on your virtual machine.
                      </p>

                      <input
                        className="mt-3 w-full border border-indigo-950 rounded-lg px-3 py-1.5 bg-black text-sm text-white"
                        value="Select an Operating System"
                      />
                    </section>

                    <section className="mt-5 border border-indigo-950 rounded-lg p-6">
                      <h3 className="text-white text-lg font-medium">
                        Security
                      </h3>

                      <p className="mt-3 text-sm text-indigo-400">
                        Configure your security settings for your Virtual
                        Private Server.
                      </p>

                      <h3 className="mt-5 text-white">
                        You don't have any SSH keys
                      </h3>

                      <button
                        onClick={() => setOpenModal(true)}
                        className="mt-1 border border-indigo-950 rounded-lg px-5 py-1.5 bg-black text-sm text-white"
                      >
                        Add SSH Key
                      </button>
                    </section>

                    <section className="mt-5 border border-indigo-950 rounded-lg p-6">
                      <h3 className="text-white text-lg font-medium">
                        Duration
                      </h3>

                      <p className="mt-3 text-sm text-indigo-400">
                        Choose the duration for your Virtual Private Server.
                      </p>

                      <input
                        className="mt-3 w-full border border-indigo-950 rounded-lg px-3 py-1.5 bg-black text-sm text-white"
                        value="1 Day"
                      />
                    </section>
                  </div>

                  <aside className="w-[40%]">
                    <div className="border border-indigo-950 rounded-lg p-6">
                      <h3 className="text-white text-lg font-medium">
                        Summary
                      </h3>

                      <h3 className="mt-3 text-white">Project Name</h3>
                      <p className="mt-1 text-indigo-400">
                        Please enter a project name
                      </p>

                      <h3 className="mt-3 text-white">Data Center</h3>
                      <p className="mt-1 text-indigo-400">
                        Please enter a data center
                      </p>

                      <h3 className="mt-3 text-white">Machine</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <LuCpu className="text-white text-lg" />
                        <p className="text-indigo-400">10 vCPUs -</p>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <LuMemoryStick className="text-white text-lg" />
                        <p className="text-indigo-400">10 GiB RAM</p>
                      </div>

                      <h3 className="mt-3 text-white">Operating System</h3>
                      <p className="mt-1 text-indigo-400">
                        Please select an operating system
                      </p>

                      <h3 className="mt-3 text-white">SSH Key</h3>
                      <p className="mt-1 text-indigo-400">
                        Please select an SSH key
                      </p>

                      <h3 className="mt-3 text-white">Price</h3>
                      <p className="mt-1 text-indigo-400">$0.00</p>

                      <button
                        onClick={() => setOpenLowBalanceModal(true)}
                        className="mt-3 w-full bg-indigo-950 text-black rounded-lg py-2"
                      >
                        Confirm & Deploy
                      </button>
                    </div>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        </main>

        <AddSSHKeyModal isOpen={isOpenModal} setOpen={setOpenModal} />
        <LowBalanceModal
          isOpen={isOpenLowBalanceModal}
          setOpen={setOpenLowBalanceModal}
        />
      </div>
    </>
  );
}
