import Image from "next/image"

const Card = ({ url, icon, name, description }: {
    name: string;
    icon: string;
    url: string;
    description: string;
}) => {
    return (
        <a className="bg-white rounded-xl shadow-md p-6 transition-transform hover:transform hover:scale-101" href={url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                    <Image src={icon} alt={name} className="h-8 w-8" loading="eager" width={36} height={36} />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{name}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
        </a>
    )
}

export default Card