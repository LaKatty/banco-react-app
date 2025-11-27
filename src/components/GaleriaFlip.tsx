/* import { useState } from "react";

export default function GaleriaFlip() {
    const items = [
        { img: "/img1.jpg", titulo: "Producto 1", descripcion: "Info adicional del producto 1." },
        { img: "/img2.jpg", titulo: "Producto 2", descripcion: "Info adicional del producto 2." },
        { img: "/img3.jpg", titulo: "Producto 3", descripcion: "Info adicional del producto 3." },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {items.map((item, i) => (
                <FlipCard key={i} item={item} />
            ))}
        </div>
    );
}

function FlipCard({ item }: { item: any }) {
    const [flip, setFlip] = useState(false);

    return (
        <div
            className="w-full h-64 perspective cursor-pointer"
            onClick={() => setFlip(!flip)}
        >
            <div
                className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
                    flip ? "rotate-y-180" : ""
                }`}
            >
                {/* Frente *}
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg backface-hidden">
                    <img
                        src={item.img}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                {/* Reverso /}
                <div className="absolute inset-0 bg-gray-800 text-white rounded-xl shadow-lg p-4 rotate-y-180 backface-hidden flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold mb-2">{item.titulo}</h3>
                    <p className="text-center">{item.descripcion}</p>
                </div>
            </div>
        </div>
    );
} */
