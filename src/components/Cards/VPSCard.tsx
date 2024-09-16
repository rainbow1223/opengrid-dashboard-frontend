import { useNavigate } from "react-router-dom";
import { TbCloudDownload, TbCloudUpload } from "react-icons/tb";

import { VPSImage } from "../../assets";

export function VPSCard({ gpu = 0, upsp = 0, downsp = 0 }) {
  const navigate = useNavigate();

  return (
    <div className="border border-indigo-950 rounded-3xl py-5 px-7">
      <div className="flex justify-center">
        <img src={VPSImage} />
      </div>

      <h3 className="mx-auto text-gray-600 font-medium text-center w-40">
        Xeon Gold 6226R 16-Core Processor Intel
      </h3>

      <h1 className="mt-4 text-indigo-500 text-2xl text-center font-bold">
        5x NVIDIA GeForce RTX 3090
      </h1>

      <div className="mt-4 flex justify-between font-medium text-lg">
        <p className="text-white">GPU:</p>
        <p className="text-gray-700">{gpu} GB</p>
      </div>

      <div className="mt-4 flex justify-between font-medium text-lg">
        <p className="text-white">CPU:</p>
        <p className="text-gray-700">314 GB / 366 GB</p>
      </div>

      <div className="mt-4 flex justify-between font-medium text-lg">
        <div className="flex items-center text-white gap-2">
          <TbCloudDownload className="text-indigo-500 text-xl" /> {downsp} Mbps
        </div>
        <div className="flex items-center text-white gap-2">
          <TbCloudUpload className="text-indigo-500 text-xl" /> {upsp} Mbps
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center gap-2">
        <div className="w-28 bg-indigo-950 rounded-full h-2">
          <div className="bg-indigo-500 text-xs font-medium text-center text-white rounded-full h-2 w-3/12"></div>
        </div>

        <p className="text-white font-medium">25 % Used</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-white font-medium">$1.19 per Hour</p>

        <div>
          <button
            onClick={() => navigate("/deploy/new")}
            className="border border-purple-600 w-32 rounded-full text-white text-center py-2"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
