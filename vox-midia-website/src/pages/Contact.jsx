import MainTitle from "../components/MainTitle";
import PrincipalTitle from "../components/PrincipalTitle";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import ButtonIcon from "../components/ButtonIcon";
import { ChevronRight } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

// TODO -> Colocar o Maps funcional

export default function ContactPage () {
    return(
        <main>
            <section className="w-full m-auto sm:container lg:max-w-4/5 px-4 sm:px-12 lg:px-6 pt-16">
                <PrincipalTitle>Contato</PrincipalTitle>
                <div className="bg-vox-2 border-[.5px] border-vox-5 py-12 px-6 md:px-24 mt-16">
                    <MainTitle>Solicite uma cotação</MainTitle>
                    <p>
                        Estamos muito animados com o seu interesse em transformar e potencializar a sua comunicação com criatividade e inovação! Por favor, preencha o formulário abaixo para que possamos criar uma proposta personalizada, alinhada às suas necessidades e aos valores do seu negócio. Juntos, vamos inspirar, inovar e deixar uma marca positiva em cada projeto.
                    </p>
                    <form className="w-full my-6 flex flex-col gap-6">
                        <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                            <FormInput
                                required={"required"}
                                className="mb-6"
                                id={"contact-name"}
                                label={"Nome*"}
                                name={"name"}
                                type={"text"}
                                htmlFor={"name"}
                                placeholder={"Nome completo"}
                            ></FormInput>

                            <FormInput
                                className="mb-6"
                                id={"contact-email"}
                                label={"Email Corporativo*"}
                                name={"email"}
                                type={"email"}
                                htmlFor={"email"}
                                placeholder={"E-mail valido"}
                            ></FormInput>

                            <FormInput
                                className="mb-6"
                                id={"contact-cellphone"}
                                label={"Celular*"}
                                name={"cellphone"}
                                type={"text"}
                                htmlFor={"cellphone"}
                                placeholder={"(xx) 00 0000-0000"}
                            ></FormInput>
                            
                            <FormInput
                                id={"contact-enterprise"}
                                label={"Empresa*"}
                                name={"enterprise"}
                                type={"text"}
                                htmlFor={"enterprise"}
                                placeholder={"Nome da empresa"}
                            ></FormInput>
                        </div>
                       <FormTextArea
                        id={"contact-decription"}
                        label={"Descreva detalhadamente como podemos ajudar sua empresa?"}
                       >
                       </FormTextArea>
                       <div className=" md:self-end self-center  md:w-1/2 w-4/5">
                        <ButtonIcon
                                type={"submit"}
                            >
                               Enviar 
                                <ChevronRight />
                            </ButtonIcon>
                       </div>
                       
                    </form>
                </div>

                <div className="bg-vox-2 border-[.5px] border-vox-5  py-12 px-6 md:px-24  my-8 ">
                    <MainTitle>Outras formas de contato</MainTitle>
                    <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-16">
                        <div className="flex gap-3">
                            <Mail size={32} color="white" />
                            <p>vox&midia@email.com</p>
                        </div>
                        <div className="flex gap-3">
                            <Phone size={26} color="white"/>
                            <p>(11) 90000-0000</p>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="w-full m-auto container lg:max-w-4/5 px-4 sm:px-12 lg:px-6 mb-32 md:mb-48 pt-16 grid col-2 grid-rows-1">
                <div className="grid md:grid-cols-2 gap-6 ">
                    <div>
                        <MainTitle>Venha conhecer</MainTitle>
                        <p>
                            Praesent sed ipsum a ex congue ultrices. Cras iaculis libero quis odio feugiat, eu efficitur urna tempus. Integer sagittis nulla felis, vel venenatis felis dignissim ac. In eget commodo risus. Sed consequat aliquam urna vel mollis. Curabitur non nunc egestas, ullamcorper libero sed, scelerisque neque. Praesent eleifend condimentum leo nec rutrum. Donec dapibus fermentum massa. Quisque iaculis suscipit diam.
                        </p>
                    </div>
                    <div className="aspect-square ">
                    <iframe className="w-full h-full xl:h-3/4"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.699038988061!2d-46.57559521389226!3d-23.61512420879654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d11c031c57f%3A0x8f79f71018065a16!2sSENAI%20S%C3%A3o%20Caetano%20do%20Sul%20-%20Inform%C3%A1tica%20-%20Escola%20Senai%20%22Paulo%20Antonio%20Skaf%22!5e0!3m2!1spt-BR!2sbr!4v1749087937508!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}