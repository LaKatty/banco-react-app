
interface Producto {
    id: number;
    nombre: string;
    imagen: string;
    descripcion: string;
}

const productos: Producto[] = [
    {
        id: 1,
        nombre: "Crédito AgroVerde",
        imagen: "public/CDT.jpeg",
        descripcion:
            "Financiación flexible para siembra, ganado y maquinaria agrícola.",
    },
    {
        id: 2,
        nombre: "Cuenta de Ahorros Rural",
        imagen: "/img/ahorros-rural.jpg",
        descripcion:
            "Ahorra con beneficios preferenciales para productores rurales.",
    },
    {
        id: 3,
        nombre: "Microcrédito Productivo",
        imagen: "/img/microcredito.jpg",
        descripcion:
            "Impulsa tu emprendimiento con cuotas bajas y aprobación rápida.",
    },
    {
        id: 4,
        nombre: "Seguro Agro",
        imagen: "/img/seguro-agro.jpg",
        descripcion:
            "Protege tus cultivos y ganado contra clima, plagas y emergencias.",
    },
];

const ProductosGrid = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-emerald-900 pt-25">
                    Nuestros Productos y Beneficios
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productos.map((prod) => (
                        <div
                            key={prod.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <img
                                src={prod.imagen}
                                alt={prod.nombre}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-xl font-bold text-emerald-800 mb-2">
                                    {prod.nombre}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {prod.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductosGrid;
