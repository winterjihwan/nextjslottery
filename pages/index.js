import Head from "next/head"
// import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Contract Lotteryp</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header connect button nav bar */}
      <Header />
      <LotteryEntrance />
    </div>
  )
}
