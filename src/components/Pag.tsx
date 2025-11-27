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
import ChatBotFloating from './ChatBotFloating'


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

                    <Product />
                    <div className=' text-4xl font-bold pt-7 ' id="sobreNosotros">
                        <div className='text-4xl p-4 text-center bg-[#F3F7E3]'>
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
                    <ChatBotFloating />

                </main>
            </div>
        </div >
    )
}


export default Appmain
