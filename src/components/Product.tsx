export const Product = () => (
    <div className="w-full py-20 lg:py-40 pt-40">
        <div className="container mx-auto ">
            <div className="flex flex-col gap-10">
                <div className="flex gap-4 flex-col items-start">
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                            Productos diseñados para ti!
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left pt-5">
                            Descubre nuestra gama completa de productos financieros, creados para adaptarse a cada etapa de tu vida
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="./src/assets/tarjetaCredito.png" alt="tarjeta Credito" />
                        </div>

                        <h3 className="text-xl tracking-tight">AgroVerde</h3>
                        <p className="text-muted-foreground text-base">
                            Siendo una tarjeta de Credito es una herramienta financiera especializada que centra su propuesta de valor en impulsar el desarrollo económico de los productores, facilitando acceso a crédito flexible, beneficios exclusivos y apoyo integral al crecimiento sostenible del sector rural.
                        </p>
                        {/* <button className="pt-10">Solicitar</button> */}
                    </div>
                    {/**Vacio */}
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="./src/assets/lisingterrirorial.png" alt="habitacional" />
                        </div>
                        <h3 className="text-xl tracking-tight">Leasing Territorial</h3>
                        <p className="text-muted-foreground text-base">
                            Facilitar el acceso a terreno rurales, permitiendo que personas y empresa, desarrollen proyectos agrícolas, ganaderos, forestales o ecológicos sin requerir invertir en una la tierra de inmediato.
                        </p>
                    </div>
                    {/**Cierra vacio */}
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="./src/assets/tarjetaDebito.png" alt="tarjeta Debito" />
                        </div>
                        <h3 className="text-xl tracking-tight">Mi Tierra</h3>
                        <p className="text-muted-foreground text-base">
                            La Cuenta de Ahorro Rural “Mi Tierra” es un producto financiero diseñado especialmente para campesinos, agricultores, ganaderos y familias del sector rural, con el objetivo de fomentar el hábito del ahorro y facilitar el acceso a servicios financieros en zonas alejadas.
                        </p>
                        {/* <button className="pt-10">Solicitar</button> */}
                    </div>
                    {/**Mas productos */}
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="./src/assets/raices.jpeg" alt="CDT" />
                        </div>
                        <h3 className="text-xl tracking-tight">Raíces 360</h3>
                        <p className="text-muted-foreground text-base">
                            Credito rotativo diseñado para los sectores agropecuarios y artesanos rurales, con acceso a tecnología, seguros y mercados.

                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="./src/assets/Semilladelfuturo.png" alt="Semillas" />
                        </div>
                        <h3 className="text-xl tracking-tight">Semilla del futuro</h3>
                        <p className="text-muted-foreground text-base">
                            Cuenta de ahorro programado diseñada para agricultores, ganaderos, artesanos y asociaciones rurales. Permite acumular capital para proyectos productivos o familiares (maquinaria, finca, vivienda, educación) con rendimientos, bonificaciones y acceso a créditos preferenciales al cumplir la meta, el productor puede acceder a créditos preferenciales y entregar parte de su cosecha en centros de acopio aliados de Agrocoop366.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="./src/assets/CDT.jpeg" alt="CDT" />
                        </div>
                        <h3 className="text-xl tracking-tight">CDT</h3>
                        <p className="text-muted-foreground text-base">
                            Certificado de Depósito a Término para el sector agropecuario y artesanal
                            colombiano.
                            Es una alternativa de inversión segura y rentable diseñada para fortalecer el ahorro del sector rural y
                            artesanal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Product