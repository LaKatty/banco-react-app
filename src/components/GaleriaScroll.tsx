/* import { motion } from "framer-motion";

import Credito from "../assets/tarjetaCredito.png"
import Lisin from "../assets/lisingterrirorial.jpeg"
import Debito from "../assets/tarjetaDebito.png"
import Raices from "../assets/raices.jpeg"
import Semilla from "../assets/Semilladelfuturo.jpeg"
import CDT from "../assets/CDT.jpeg"

export default function GaleriaScroll() {
    const imagenes = [
        { src: Credito, titulo: "AgroVerde", descripcion: "Siendo una tarjeta de Credito es una herramienta financiera especializada que centra su propuesta de valor en impulsar el desarrollo económico de los productores, facilitando acceso a crédito flexible, beneficios exclusivos y apoyo integral al crecimiento sostenible del sector rural." },
        { src: "/img2.jpg", titulo: "Producto 2", descripcion: "Otra descripción." },
        { src: "/img3.jpg", titulo: "Producto 3", descripcion: "Más info del producto." }
    ];

    return (
        <section className="py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imagenes.map((img, i) => (
                <motion.div
                    key={i}
                    className="overflow-hidden rounded-xl shadow-md bg-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                >
                    <img src={img.src} className="w-full h-56 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{img.titulo}</h3>
                        <p className="text-gray-600">{img.descripcion}</p>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
 */