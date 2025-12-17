import Wallets from "@/components/Wallets";

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
            A New Era for Wallets
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 text-center">
            Wasn&apos;t this site a wallet?
          </h3>
          <p className="text-gray-500 text-lg mb-6 text-center">
            This site (wallet.near.org) used to serve as a web wallet, but has now evolved into a gateway to the broader NEAR wallet ecosystem
          </p>
          <div className="mb-8 bg-gray-50 rounded-lg p-6">
            <p className="text-sm text-gray-600 max-w-xl text-center leading-relaxed">
              If you have not already done so, please import your account to a
              new wallet using your recovery phrase. If you created an email or
              text message backup, your recovery link will still work but now
              defaults to{" "}
              <a
                href="https://app.mynearwallet.com"
                className="text-blue-600 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                app.mynearwallet.com
              </a>
            </p>
          </div>
          <div className="mb-8 bg-gray-50 rounded-lg p-6">
            <p className="text-sm text-gray-600 max-w-xl text-center leading-relaxed">
              If you think you have a recovery backup email but are not sure how
              to find it, search your email for &quot;Near Wallet Recovery&quot; in the
              subject line (include quotes for better results)
            </p>
          </div>
          <a
            href="https://medium.com/nearprotocol/near-opens-the-door-to-more-wallets-255eee58eb97"
            className="border-2 border-black text-black px-6 py-3 rounded-full transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer font-medium mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
