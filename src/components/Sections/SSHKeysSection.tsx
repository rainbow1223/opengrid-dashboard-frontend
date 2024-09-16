import { useState } from "react";

import { AddSSHKeyModal } from "../Modals";

export function SSHKeySection() {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="mx-auto max-w-5xl">
        <div className="mt-10">
          <div className="flex justify-between items-center gap-5 rounded-t-lg">
            <div className="text-lg">
              <h3 className="text-white font-medium">SSH Keys</h3>
              <p className="mt-3 text-gray-500 text-sm">
                Configure your security settings for your Virtual Private
                Server. SSH keys are a secure way to connect to your server
                without using a password.
              </p>
            </div>

            <div className="w-48">
              <button
                onClick={() => setOpenModal(true)}
                className="font-medium text-sm text-white border border-indigo-900 rounded-lg px-5 py-1.5"
              >
                Add an SSH Key
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddSSHKeyModal isOpen={isOpenModal} setOpen={setOpenModal} />
    </div>
  );
}
