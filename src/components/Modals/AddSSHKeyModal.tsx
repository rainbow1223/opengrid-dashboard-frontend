import { SetStateAction, Dispatch } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { MdClose } from "react-icons/md";

interface IAddSSHKeyModal {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function AddSSHKeyModal({ isOpen, setOpen }: IAddSSHKeyModal) {
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

            <h1 className="text-xl font-medium text-left">Add an SSH key</h1>

            <p className="text-indigo-500/50">
              You can add this SSH key to your server to securely connect to it
            </p>

            <h3 className="mt-5 text-white">Public Key</h3>

            <textarea
              className="mt-2 text-white w-full bg-black rounded-xl p-3"
              rows={4}
              placeholder="ssh-ed25519 AAAAC3NaC1lZDl1NTE5AAAI..."
            ></textarea>

            <div className="flex justify-end">
              <button className="mt-3 w-32 bg-indigo-600 text-white py-2 rounded-lg">
                Add SSH Key
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
