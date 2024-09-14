import { ConnectButton } from "../Buttons";
import { LogoMini } from "../../assets";

export function ConnectWalletSection() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="mx-auto max-w-72">
        <div className="mx-auto w-16 my-5">
          <img src={LogoMini} />
        </div>

        <h3 className="text-center text-white text-lg">Connect your wallet</h3>

        <p className="mt-5 text-center text-indigo-400">
          Connect your wallet to manage your VPS and Nodes
        </p>

        <div className="mt-5 mx-auto w-40">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
