import { LuLayoutDashboard, LuBox } from "react-icons/lu";

import { LogoMini } from "../../assets";

export function DeployVPSSection() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="mx-auto max-w-xl">
        <div className="mx-auto w-16 my-5">
          <img src={LogoMini} />
        </div>

        <h3 className="text-center text-white text-lg">
          Deploy your first VPS
        </h3>

        <p className="mt-5 text-center text-indigo-400">
          Launch a Virtual Private Server from your preferred configuration
        </p>

        <div className="mt-5">
          <div className="border-x border-t border-indigo-900 flex justify-between items-center gap-5 p-3 rounded-t-lg">
            <div className="flex items-center gap-5">
              <div className="w-5">
                <LuBox className="text-white text-2xl" />
              </div>

              <div className="text-sm">
                <h3 className="text-white">Deploy VPS</h3>
                <p className="text-gray-500">
                  Launch a Virtual Private Server from your preferred
                  configuration.
                </p>
              </div>
            </div>

            <div>
              <button className="font-medium text-sm text-white border border-indigo-900 rounded-lg px-5 py-1.5">
                Deploy
              </button>
            </div>
          </div>
          <div className="border border-indigo-900 flex justify-between items-center gap-5 p-3 rounded-b-lg">
            <div className="flex items-center gap-5">
              <div className="w-5">
                <LuLayoutDashboard className="text-white text-2xl" />
              </div>

              <div className="text-sm">
                <h3 className="text-white">Browse Common Installations</h3>
                <p className="text-gray-500">
                  Deploy your projects effortlessly with our one-click
                  installation, simplifying common use case setups.
                </p>
              </div>
            </div>

            <div>
              <button className="font-medium text-sm text-gray-600 border border-gray-800 rounded-lg px-5 py-1.5">
                Choose Installation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
