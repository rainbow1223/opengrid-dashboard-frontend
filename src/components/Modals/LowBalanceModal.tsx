import { SetStateAction, Dispatch } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { MdClose } from "react-icons/md";

interface ILowBalanceModal {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function LowBalanceModal({ isOpen, setOpen }: ILowBalanceModal) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-slate-900/20 backdrop-blur p-3 sm:p-5 fixed inset-0 z-50 grid place-items-center cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0, rotate: "40deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-third p-3 sm:p-5 relative text-white rounded-2xl w-full max-w-lg border border-indigo-950"
          >
            <button
              className="absolute top-3 right-2.5 text-white hover:border hover:border-rose-500 hover:text-rose-500 rounded-xl p-1.5"
              onClick={() => setOpen(false)}
            >
              <MdClose className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>

            <h1 className="text-xl font-medium text-left">Low Balance</h1>

            <p className="text-indigo-400/60 text-sm">
              You cannot deploy this service, your balance is lower than the
              plan you chose.
            </p>

            <div className="mt-3 flex justify-between text-sm">
              <p className="font-medium text-gray-400">Your Credit:</p>
              <p>$0.00</p>
            </div>

            <div className="mt-1 flex justify-between text-sm">
              <p className="font-medium text-gray-400">
                Minimum Credit needed for 5 days:
              </p>
              <p>$2.00</p>
            </div>

            <div className="mt-3 flex justify-end">
              <button className="w-32 border border-indigo-900 p-2 rounded-xl">
                Add To Credit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
