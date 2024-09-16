import { useState } from "react";

import { WorldMapImage } from "../../assets";
import { VPSCard } from "../Cards";

const vpss = [
  {
    name: "Nvidia RTX5000",
    id: "1x RTX5000",
    gpu: 16,
    upsp: 50,
    downsp: 448,
    price: 0.82,
  },
  {
    name: "Nvidia RTX6000",
    id: "1x RTX6000",
    gpu: 48,
    upsp: 666,
    downsp: 1641,
    price: 0.97,
  },
  {
    name: "Nvidia P40",
    id: "1x P40",
    gpu: 24,
    upsp: 495,
    downsp: 1111,
    price: 2.07
  },
  {
    name : "Nvidia H100",
    id: "1x H100",
    gpu: 80,
    upsp: 199993,
    downsp: 3000000,
    price: 2.49,
  },
  {
    name: "Nvidia P6000",
    id: "1x P6000",
    gpu: 24,
    upsp: 321,
    downsp: 645,
    price: 1.10
  },
  {
    name: "Nvidia RTX5000",
    id: "1x RTX5000",
    gpu: 16,
    upsp: 495,
    downsp: 791,
    price: 0.82
  }
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
              name={vps.name}
              id={vps.id}
              gpu={vps.gpu}
              upsp={vps.upsp}
              downsp={vps.downsp}
              price={vps.price}
            />
          );
        })}
      </div>
    </div>
  );
}
