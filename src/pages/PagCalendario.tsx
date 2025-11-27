import { useState } from "react";
import Calen1 from "../assets/calendario1.jpeg"
import Calen2 from "../assets/calendario2.jpeg"
import Calen3 from "../assets/calendario3.jpeg"
import Calen4 from "../assets/calendario4.jpeg"
import Calen5 from "../assets/calendario5.jpeg"
import Aplicacion from "../assets/aplicacion.jpeg"

interface Producto {
    id: number;
    nombre: string;
    imagen: string;
    descripcion: string;
    extra: string;
}

const productos: Producto[] = [
    {
        id: 1,
        nombre: "Calendario",
        imagen: Calen1,
        descripcion: "Calendario Agricultor",
        extra: `Septiembre`
    },
    {
        id: 2,
        nombre: "Calendario",
        imagen: Calen2,
        descripcion: "Calendario Agricultor",
        extra: `Octubre`
    },
    {
        id: 3,
        nombre: "Calendario",
        imagen: Calen3,
        descripcion: "Calendario Agricultor",
        extra: `Noviembre`
    },
    {
        id: 4,
        nombre: "Calendario",
        imagen: Calen4,
        descripcion: "Calendario Agricultor",
        extra: `Noviembre`
    },
    {
        id: 5,
        nombre: "Calendario",
        imagen: Calen5,
        descripcion: "Calendario Agricultor",
        extra: `Octubre`
    },
    {
        id: 6,
        nombre: "Aplicación Móvil",
        imagen: Aplicacion,
        descripcion: "Calendario Agricultor",
        extra: ` `
    }

];

const ProductosGrid = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

    const abrirModal = (producto: Producto) => {
        setProductoSeleccionado(producto);
        setModalOpen(true);
    };

    const cerrarModal = () => {
        setModalOpen(false);
        setProductoSeleccionado(null);
    };

    return (
        <div className="py-10 bg-[#F3F7E3]">
            <h2 className="text-4xl font-bold text-center py-4 pt-38 pb-20">Nuestros Productos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-36">
                {productos.map((prod) => (
                    <div
                        key={prod.id}
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer border"
                        onClick={() => abrirModal(prod)}
                    >
                        <img
                            src={prod.imagen}
                            alt={prod.nombre}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-bold mt-3">{prod.nombre}</h3>
                        <p className="text-gray-600 text-sm mt-1">{prod.descripcion}</p>

                        <button className="mt-4 bg-emerald-700 text-white px-4 py-2 rounded-lg hover:bg-emerald-800 transition">
                            Ver más
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && productoSeleccionado && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
                    <div className="bg-white p-6 rounded-xl w-11/12 max-w-md shadow-lg relative max-h-[80vh] overflow-y-auto">
                        <button
                            onClick={cerrarModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        <img
                            src={productoSeleccionado.imagen}
                            className="w-full h-full object-cover rounded-lg"
                        />

                        <h3 className="text-2xl font-bold mt-4">{productoSeleccionado.nombre}</h3>

                        <p className="text-gray-700 mt-3 whitespace-pre-line">{productoSeleccionado.extra}</p>

                        <button
                            onClick={cerrarModal}
                            className="mt-5 w-full bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-800 transition"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductosGrid;