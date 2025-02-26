import Image from 'next/image'

const Navbar = () => {
    return (
        <header className="container mx-auto px-4 py-6">
            <a className="flex justify-between items-center" href="https://near.org/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/near.svg"
                    alt="NEAR Protocol Logo"
                    className="h-10"
                    width={160}
                    height={100}
                />
            </a>
        </header>
    )
}

export default Navbar