import { ConnectButton } from "@web3uikit/web3"

export default function Header() {
  return (
    <div className="border-b-2 p-5 flex">
      <h1 className="py-4 px-4 font-mono text-3xl">Decentralized Lottery</h1>
      <div className=" ml-auto py-2 px-4">
        <ConnectButton />
      </div>
    </div>
  )
}
