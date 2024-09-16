import { useState } from "react";
import { Link } from "react-router-dom";

import { LuLayoutDashboard, LuInbox } from "react-icons/lu";
import { PiWalletBold, PiDiceThree } from "react-icons/pi";
import { FaBook, FaTelegram, FaTwitter } from "react-icons/fa6";
import { TbBrandPowershell } from "react-icons/tb";

import { AddCreditModal } from "../Modals";
import { LeaderBoardIcon, LiveGpuIcon, StakingIcon } from "../../assets";

export function Sidebar({ active = -1 }) {
  const [isOpenCreditModal, setOpenCreditModal] = useState(false);

  return (
    <>
      <aside className="hidden lg:flex flex-col justify-between w-[340px] bg-indigo-950/50 px-6 py-6">
        <div className="flex flex-col">
          <ul>
            <li>
              <Link to="/">
                <div
                  className={`flex items-center border border-indigo-900 rounded-xl ${
                    active === 1 ? "bg-indigo-600" : "bg-gray-900"
                  } text-white px-5 py-2 gap-5`}
                >
                  <LuLayoutDashboard className="text-xl text-indigo-400" />
                  Dashboard
                </div>
              </Link>
            </li>
          </ul>

          <div className="mt-4 border-none h-px bg-indigo-950" />

          <h3 className="my-4 text-sm uppercase text-indigo-500/50">compute</h3>

          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/gpu">
                <div
                  className={`flex items-center border border-indigo-900 rounded-xl ${
                    active === 2 ? "bg-indigo-600" : "bg-gray-900"
                  } text-white px-5 py-2 gap-5`}
                >
                  <img className="w-6" src={LiveGpuIcon} alt="live gpu" />
                  Live GPU
                </div>
              </Link>
            </li>

            <li>
              <div
                className={`flex items-center rounded-xl bg-gray-900 text-gray-400 px-5 py-2 gap-5`}
              >
                <img className="w-5" src={LeaderBoardIcon} alt="leaderboard" />
                Leaderboard <span className="text-xs">(comming soon)</span>
              </div>
            </li>

            <li>
              <div
                className={`flex items-center rounded-xl bg-gray-900 text-gray-400 px-5 py-2 gap-5`}
              >
                <img className="w-5" src={StakingIcon} alt="staking" />
                Staking <span className="text-xs">(comming soon)</span>
              </div>
            </li>
          </ul>

          <div className="mt-4 border-none h-px bg-indigo-950" />

          <h3 className="my-4 text-sm uppercase text-indigo-500/50">manage</h3>

          <ul className="flex flex-col gap-4">
            <li>
              <div className="flex items-center rounded-xl bg-gray-900 text-gray-400 px-5 py-2 gap-5">
                <LuInbox className="text-xl text-gray-400" /> Node AI
                Marketplace
              </div>
            </li>

            <li>
              <div className="flex items-center rounded-xl bg-gray-900 text-gray-400 px-5 py-2 gap-5">
                <PiDiceThree className="text-xl text-gray-400" /> GPU Sharing
                Pool
              </div>
            </li>

            <li>
              <Link to="/billing">
                <div
                  className={`flex items-center border border-indigo-900 rounded-xl ${
                    active === 8 ? "bg-indigo-600" : "bg-gray-900"
                  } text-white px-5 py-2 gap-5`}
                >
                  <PiWalletBold className="text-xl text-indigo-400" />
                  Billing
                </div>
              </Link>
            </li>

            <li>
              <Link to="/ssh-keys">
                <div
                  className={`flex items-center border border-indigo-900 rounded-xl ${
                    active === 9 ? "bg-indigo-600" : "bg-gray-900"
                  } text-white px-5 py-2 gap-5`}
                >
                  <TbBrandPowershell className="text-xl text-indigo-400" />
                  SSH Keys
                </div>
              </Link>
            </li>
          </ul>

          <div className="mt-4 border-none h-px bg-indigo-950" />
        </div>

        <div>
          <h3 className="mt-4 text-lg font-medium text-indigo-500/50">
            My Credit
          </h3>
          <h3 className="mt-1 my-4 text-xl font-medium text-white">$0.00</h3>

          <ul>
            <li>
              <button
                onClick={() => setOpenCreditModal(true)}
                className="w-full text-white font-medium border border-indigo-400/50 hover:bg-indigo-500 py-2 rounded-xl"
              >
                Add Credit
              </button>
            </li>
          </ul>

          <div className="mt-4 border-none h-px bg-indigo-950" />

          <ul className="my-4 flex justify-around text-gray-400 text-xl">
            <li>
              <a
                className="hover:text-indigo-500"
                href="https://x.com/OpenGRID_ERC"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                className="hover:text-indigo-500"
                href="https://t.me/OpenGRID"
                target="_blank"
              >
                <FaTelegram />
              </a>
            </li>
            <li>
              <a
                className="hover:text-indigo-500"
                href="https://opengrid.gitbook.io/opengrid-docs"
                target="_blank"
              >
                <FaBook />
              </a>
            </li>
          </ul>

          <div className="border-none h-px bg-indigo-950" />

          <div className="mt-4 text-center text-sm text-indigo-400">
            &copy; 2024. All right reserved
          </div>
        </div>
      </aside>

      <AddCreditModal isOpen={isOpenCreditModal} setOpen={setOpenCreditModal} />
    </>
  );
}
