import { SetStateAction, Dispatch } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { MdClose } from "react-icons/md";

interface IAddCreditModal {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function AddCreditModal({ isOpen, setOpen }: IAddCreditModal) {
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

            <h1 className="text-xl font-medium text-left">Add Credit</h1>

            <div className="mt-3 sm:mt-5 p-3 sm:p-5 border border-indigo-950 rounded-xl">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3>Credit Amount (USD)</h3>
                  <input
                    className="px-3 py-1.5 rounded-lg bg-gray-900"
                    defaultValue={0}
                  />
                  <p>Minimum amount: $50.00</p>
                </div>

                <div className="flex flex-col gap-1">
                  <h3>Currency</h3>
                  <input
                    className="px-3 py-1.5 rounded-lg bg-gray-900"
                    defaultValue="VPS AI"
                    readOnly
                  />
                  <p>Minimum payment: $50.00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
