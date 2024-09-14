import { useState } from "react";
import { Link } from "react-router-dom";

import { LuLayoutDashboard, LuBox, LuInbox } from "react-icons/lu";
import {
  PiWalletBold,
  PiHandCoinsBold,
  PiDatabase,
  PiDiceThree,
} from "react-icons/pi";
import { GrNodes } from "react-icons/gr";
import {
  FaBook,
  FaMedium,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { TbBrandPowershell } from "react-icons/tb";

import { AddCreditModal } from "../Modals";
import { FaHome } from "react-icons/fa";

export function Sidebar({ active = -1 }) {
  const [isOpenCreditModal, setOpenCreditModal] = useState(false);

  return (
    <>
      <aside className="hidden lg:flex flex-col justify-between w-1/6 bg-indigo-600/30 px-6 py-6">
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

          <div className="mt-4 border-none h-px bg-indigo-900" />

          <h3 className="my-4 text-sm uppercase text-indigo-500/50">compute</h3>

          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/vps">
                <div
                  className={`flex items-center border border-indigo-900 rounded-xl ${
                    active === 2 ? "bg-indigo-600" : "bg-gray-900"
                  } text-white px-5 py-2 gap-5`}
                >
                  <LuBox className="text-xl text-indigo-400" />
                  Live GPU
                </div>
              </Link>
            </li>
            <li>
              
                <div
                  className={`flex items-center border border-indigo-900 rounded-xl ${
                    active === 3 ? "bg-indigo-600" : "bg-gray-900"
                  } text-white px-5 py-2 gap-5`}
                >
                  <FaHome className="text-xl text-indigo-400" />
                  Leaderboard 
                </div>
             
            </li>
            <li>
              <div className="flex items-center rounded-xl bg-gray-900 text-gray-400 px-5 py-2 gap-5">
                <PiHandCoinsBold className="text-xl text-gray-400" /> Staking
              </div>
            </li>
            {/* <li>
              <Link to="/nodes">
                <div
                  className={`flex items-center border border-indigo-900 rounded-xl ${
                    active === 3 ? "bg-indigo-600" : "bg-gray-900"
                  } text-white px-5 py-2 gap-5`}
                >
                  <GrNodes className="text-xl text-indigo-400" />
                  Nodes
                </div>
              </Link>
            </li> */}

            {/* <li>
              <Link to="/data-centers">
                <div
                  className={`flex items-center border border-indigo-900 rounded-xl ${
                    active === 4 ? "bg-indigo-600" : "bg-gray-900"
                  } text-white px-5 py-2 gap-5`}
                >
                  <PiDatabase className="text-xl text-indigo-400" />
                  Data Centers
                </div>
              </Link>
            </li> */}
          </ul> 

          <div className="mt-4 border-none h-px bg-indigo-800" />

          <h3 className="my-4 text-sm uppercase text-indigo-500/50">manage</h3>

          <ul className="flex flex-col gap-4">
            

            <li>
              <div className="flex items-center rounded-xl bg-gray-900 text-gray-400 px-5 py-2 gap-5">
                <LuInbox className="text-xl text-gray-400" /> Marketplace
              </div>
            </li>

            <li>
              <div className="flex items-center rounded-xl bg-gray-900 text-gray-400 px-5 py-2 gap-5">
                <PiDiceThree className="text-xl text-gray-400" /> GPU Sharing Pool
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

          <div className="mt-4 border-none h-px bg-indigo-800" />
        </div>

        <div>
          <h3 className="mt-4 text-lg font-medium text-indigo-600">
            My Credit
          </h3>
          <h3 className="mt-1 my-4 text-xl font-medium text-white">$0.00</h3>

          <ul>
            <li>
              <button
                onClick={() => setOpenCreditModal(true)}
                className="w-full text-white font-medium border border-indigo-400/50 py-2 rounded-xl"
              >
                Add Credit
              </button>
            </li>
          </ul>

          <div className="mt-4 border-none h-px bg-indigo-800" />

          <ul className="my-4 flex justify-between text-white text-xl">
            <li>
              <FaYoutube />
            </li>
            <li>
              <a href="https://x.com/OpenGRID_ERC" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <FaMedium />
            </li>
            <li>
              <a href="https://t.me/OpenGRID" target="_blank">
                <FaTelegram />
              </a>
            </li>
            <li>
              <a
                href="https://opengrid.gitbook.io/opengrid-docs"
                target="_blank"
              >
                <FaBook />
              </a>
            </li>
          </ul>

          <div className="border-none h-px bg-indigo-800" />

          <div className="mt-4 text-center text-sm text-indigo-400">
            &copy; 2024. All right reserved
          </div>
        </div>
      </aside>

      <AddCreditModal isOpen={isOpenCreditModal} setOpen={setOpenCreditModal} />
    </>
  );
}
