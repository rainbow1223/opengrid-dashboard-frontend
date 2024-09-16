import { RiInformationLine } from "react-icons/ri";

export function BillingInformationSection() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="mx-auto mt-5 max-w-5xl ">
        <div className="border border-indigo-900 rounded-2xl p-5">
          <div className="flex items-center gap-1 text-indigo-500 font-medium text-lg">
            <RiInformationLine className="text-xl" />
            Important Information
          </div>

          <div className="mt-5">
            <div className="text-gray-400 text-sm">
              <h3 className="text-white font-medium">
                How to add credit to your account?
              </h3>
              <p className="mt-2 ">
                More information on adding credits will be provided by OpenGRID
                shortly. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="mt-5 text-2xl text-white font-medium">
            Payment History
          </h1>
        </div>
      </div>
    </div>
  );
}
