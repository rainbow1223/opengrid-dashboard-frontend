import { useState } from "react";

import { WorldMapImage } from "../../assets";
import { VPSCard } from "../Cards";

const vpss = [
  {
    gpu: 8,
    upsp: 277,
    downsp: 1111,
  },
  {
    gpu: 32,
    upsp: 666,
    downsp: 1641,
  },
  {
    gpu: 16,
    upsp: 495,
    downsp: 1111,
  },
  {
    gpu: 8,
    upsp: 495,
    downsp: 1111,
  },
  {
    gpu: 128,
    upsp: 321,
    downsp: 645,
  },
  {
    gpu: 64,
    upsp: 495,
    downsp: 791,
  },
  {
    gpu: 64,
    upsp: 32,
    downsp: 1791,
  },
  {
    gpu: 128,
    upsp: 495,
    downsp: 791,
  },
];

export function VPSSection() {
  const [vpsInfo, setVpsInfo] = useState<any>(vpss);
  const [gpu, setGpu] = useState(-1);

  function filterGpu(_gpu: number) {
    if (_gpu === -1) {
      setVpsInfo(vpss);
    } else {
      const _vpss = vpss.filter((vps) => vps.gpu === _gpu);
      setVpsInfo(_vpss);
    }
    setGpu(_gpu);
  }

  return (
    <div>
      <h1 className="text-5xl text-indigo-500 font-bold">Live GPU OpenGRID</h1>

      <div className="mt-10 flex justify-center border border-indigo-700/40 rounded-3xl py-10">
        <img src={WorldMapImage} />
      </div>

      <ul className="my-5 flex gap-2">
        <li>
          <button
            onClick={() => filterGpu(-1)}
            className={`w-20 py-2 text-white text-center ${
              gpu === -1 ? "bg-indigo-600" : "border border-indigo-600"
            } rounded-full focus:outline-none transition-all duration-300`}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => filterGpu(8)}
            className={`w-20 py-2 text-white text-center ${
              gpu === 8 ? "bg-indigo-600" : "border border-indigo-600"
            } rounded-full focus:outline-none transition-all duration-300`}
          >
            8 GB
          </button>
        </li>
        <li>
          <button
            onClick={() => filterGpu(16)}
            className={`w-20 py-2 text-white text-center ${
              gpu === 16 ? "bg-indigo-600" : "border border-indigo-600"
            } rounded-full focus:outline-none transition-all duration-300`}
          >
            16 GB
          </button>
        </li>
        <li>
          <button
            onClick={() => filterGpu(32)}
            className={`w-20 py-2 text-white text-center ${
              gpu === 32 ? "bg-indigo-600" : "border border-indigo-600"
            } rounded-full focus:outline-none transition-all duration-300`}
          >
            32 GB
          </button>
        </li>
        <li>
          <button
            onClick={() => filterGpu(64)}
            className={`w-20 py-2 text-white text-center ${
              gpu === 64 ? "bg-indigo-600" : "border border-indigo-600"
            } rounded-full focus:outline-none transition-all duration-300`}
          >
            64 GB
          </button>
        </li>
        <li>
          <button
            onClick={() => filterGpu(128)}
            className={`w-20 py-2 text-white text-center ${
              gpu === 128 ? "bg-indigo-600" : "border border-indigo-600"
            } rounded-full focus:outline-none transition-all duration-300`}
          >
            128 GB
          </button>
        </li>
      </ul>

      <div className="grid grid-cols-3 gap-5">
        {vpsInfo.map((vps: any, index: number) => {
          return (
            <VPSCard
              key={index}
              gpu={vps.gpu}
              upsp={vps.upsp}
              downsp={vps.downsp}
            />
          );
        })}
      </div>
    </div>
  );
}
