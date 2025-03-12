import wallets from "./data/wallets";
import Card from "./components/Card";

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
      <section className="mb-20 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wallets.map((wallet, index) => (
            <Card key={`card-${index}`} {...wallet} />
          ))}
        </div>
      </section>
      <section className="mt-8 pt-12 bg-white bg-[url('/plus.png')] w-full bg-repeat bg-top bg-[size:75px_75px] h-[640px] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 py-4 bg-white flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold mb-8 font-serif text-center">
            A new era for NEAR wallets
          </h2>
          <h3 className="text-3xl font-semibold text-gray-400 mb-6 text-center">
            Wasn&apos;t this site a wallet?
          </h3>
          <p className="text-neutral-600 text-lg mb-4 text-center">
            wallet.near.org&apos;s wallet service has been discontinued
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-sm text-neutral-600 max-w-xl text-center">
              If you have not already done so, please import your account to a
              new wallet using your recovery phrase. If you created an email or
              text message backup, your recovery link will still work but now
              defaults to{" "}
              <a
                href="https://app.mynearwallet.com"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                app.mynearwallet.com
              </a>
            </p>
            <p className="text-sm text-neutral-600 max-w-xl text-center">
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
