import Wallets from "@/components/Wallets";
import Link from "next/link";

export default async function Page() {

  return (
    <main className="bg-[color:#f2f1ea]">
      <section className="text-center container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          NEAR Ecosystem Wallets
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore a range of user-friendly wallets designed to meet your needs.
        </p>
      </section>
      <Wallets/>
      <section className="mt-8 py-16 bg-white bg-[url('/plus.png')] w-full bg-repeat bg-top bg-[size:42px_42px] min-h-[640px] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-8 py-10 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Wasn&apos;t this a wallet?
          </h2>
          <p className="text-gray-500 text-lg mb-6 text-center">
            This site (wallet.near.org) used to serve as a web wallet, but has now evolved into a gateway to the broader NEAR wallet ecosystem
          </p>
          <div className="mb-8 bg-gray-50 rounded-lg p-6">
            <p className="text-sm text-gray-600 max-w-xl text-center leading-relaxed">
              If you think you have a recovery backup email but are not sure how
              to find it, search your email for &quot;Near Wallet Recovery&quot; in the
              subject line (include quotes for better results)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
