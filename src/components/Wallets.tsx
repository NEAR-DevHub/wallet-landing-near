import wallets from "@/data/wallets"
import Card from "./Card"

const Wallets = () => {
  return <section className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {wallets.map((wallet, index) => (
        <Card key={`card-${index}`} {...wallet} />
      ))}
    </div>
  </section>
}

export default Wallets