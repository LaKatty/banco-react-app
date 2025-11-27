import { useState } from "react";

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
        nombre: "Raíces 360",
        imagen: "public/raices2.jpeg",
        descripcion: "Inversión segura a corto, mediano y largo plazo.",
        extra: `
        BENEFICIOS
        -Acceso directo a cuentas de ahorro rurales con tasas preferenciales.
        -Compras y retiros en cualquier cajero o establecimiento nacional.
        -Descuentos en insumos agrícolas, maquinaria, ferreterías y cooperativas asociadas.
        -Programas de educación financiera rural gratuitos, talleres de ahorro y administración del dinero en las veredas.
        `
    },
    {
        id: 2,
        nombre: "Crédito AgroVerde",
        imagen: "public/tarjetaCredito.png",
        descripcion: "Financiación para pequeños y medianos productores.",
        extra: `
        BENEFICIOS
        -Acceso a financiamiento especializado
	-Cupos de crédito adaptados a los ciclos productivos del agro.
	-Tasas de interés preferenciales para compra de insumos, maquinaria y tecnología.
-Apoyo a la economía rural y artesanal
	-Beneficios en compras relacionadas con insumos agrícolas, artesanías, ferreterías y transporte.
	-Convenios con proveedores del campo y cooperativas.

    TASAS DE INTERÉS:
    -Compras en comercios aliados del sector agropecuario: 1.2% MV (14.4% EA).
	-Compras generales (no agro): 1.6% MV (19.2% EA).
	-Avances en efectivo: 2.0% MV (24% EA).
	-Pago diferido a 3 o 6 meses en insumos agropecuarios: 0% interés en comercios aliados

`
    },
    {
        id: 3,
        nombre: "Leasing Territorial",
        imagen: "public/lising2.jpeg",
        descripcion: "Ahorra con beneficios exclusivos y cero cuota de manejo.",
        extra: `
        BENEFICIOS
        -Acceso a tierra sin necesidad de compra inmediata.
-Canon mensual accesible y ajustado a la actividad productiva.
-Opción de compra con descuentos por cumplimiento de metas.
-Asistencia técnica y capacitación gratuita. 
-20% de descuento en el valor de compra si se cumplen metas productivas y sostenibilidad.
-10% de descuento en el canon mensual para jóvenes rurales y mujeres campesinas.
-Subsidios estatales disponibles para agricultores de bajos ingresos.
-Bonificación del 5%por participación de programas de formación Técnica (Sena, Corporación Universitaria Lasallista). 

-Expansión sin inversión inicial en tierra
-Flexibilidad operativa y fiscal
-Acceso a terrenos estratégicos con infraestructura básica
-Fortalecimiento de la competitividad rural


TASAS DE INTERÉS:
-Agricultores informales o emergentes: 5.9% fija Canon subsidiado, acceso a fondo de garantía rural, asistencia técnica gratuita.
-Jóvenes rurales / Mujeres campesinas: 5.5% fija Bonificación por inclusión social, descuentos por formación técnica.
-Productores consolidados (> $3M COP/mes): 6.5% fija o variable acceso a terrenos premium, opción de compra anticipada, asesoría personalizada


        `
    },
    {
        id: 4,
        nombre: "Tarjeta de Debito",
        imagen: "public/tarjetaDebito.png",
        descripcion: "Compras fáciles y programa de puntos.",
        extra: `
        BENEFICIOS
        -Acceso directo a cuentas de ahorro rurales con tasas preferenciales.
-Compras y retiros en cualquier cajero o establecimiento nacional.
-Descuentos en insumos agrícolas, maquinaria, ferreterías y cooperativas asociadas.
-Programas de educación financiera rural gratuitos, talleres de ahorro y administración del dinero en las veredas.
-Seguridad y tecnología sin contacto (contactless) para pagos rápidos.
-Permite recibir pagos por ventas de productos del campo directamente en la cuenta.
-Incentivos productivos: los ahorradores destacados reciben herramientas o bonos para mejorar su producción.
-Acceso a productos de la cooperativa como a la tarjeta de crédito Agroverde
-Inclusión: permite a poblaciones sin acceso a la banca tradicional ingresar al sistema financiero.

        
        `
    },
    {
        id: 5,
        nombre: "CDT",
        imagen: "public/CDT2.jpeg",
        descripcion: "Compras fáciles y programa de puntos.",
        extra: `
        BENEFICIOS
        -Mejora la productividad y rentabilidad rural.
-Combina inclusión financiera con transformación digital.
-Genera formalización e historial crediticio positivo. 
-Brinda acceso real a crédito, seguros y mercados.
-Impulsa la economía naranja rural al integrar agro y artesanía.
-Permite gestión completa del negocio desde una sola plataforma.
-Acceso a programas de capacitación y educación financiera.

        `
    },
    {
        id: 6,
        nombre: "Semilla",
        imagen: "public/semilla2.jpeg",
        descripcion: "Compras fáciles y programa de puntos.",
        extra: `
        BENEFICIOS
        -Bonificación por cumplimiento
-Crédito preferencial
-Educación financiera
-Seguridad
        `
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
            <h2 className="text-4xl font-bold text-center py-4 pt-38">Nuestros Productos</h2>

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
                            className="w-full h-70 object-cover rounded-lg"
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