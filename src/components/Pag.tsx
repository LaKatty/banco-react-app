import Navbar from './Navbar'
import DynamicTitle from './DynamicTitle'
import Text from './Text'
//import Header from './Header'
import Mision from './Mision'
import Vision from './Vision'
import Product from './Product'
import Start from './Start'
import Contact from './Contact'
import Footer1 from './Footer1'
import Encabezado from './Encabezado'

function Appmain() {
    return (
        <Pag />
    )

}
const Pag: React.FC = () => {
    return (
        //Contenedor
        <div className=''>
            {/*menu*/}
            {/* <Header 
            logo='./src/assets/Logo.jpeg'
            /> */}

            <header className='h-20'>
                <Navbar />
            </header>
            <div className='h-full w-full'>
                <div className=' '>
                    <Encabezado />
                </div>
                {/*Cuerpo*/}
                <main className=''>
                    {/* <Text
                    text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati amet natus dolore iure dolores delectus, est aliquam incidunt ex alias possimus aliquid aspernatur! Magnam, delectus itaque odio nesciunt voluptatum ea!Lorem'
                /> */}

                    <div className=' text-4xl font-bold pt-7 '>
                        <div className='text-4xl p-4 text-center'>
                            <DynamicTitle
                                title='Nuestra Esencia'
                                subtitle=''
                            />
                            <div className='pt-5'>
                                <Text
                                    text='Construimos futuro financiero de nuestros clientes con innovación, confianza y compromiso social.'
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Mision />
                        <Vision />
                        <Product />
                    </div>
                    {/*product*/}
                    <div>
                        <Start />
                    </div>
                    <div>
                        <Contact />
                    </div>
                    {/**Footer <div>
                    <Footer1/>
                </div>*/}
                    <div>
                        <Footer1 />
                    </div>


                </main>
            </div>
        </div >
    )
}


export default Appmain
