import MainTitle from "../components/MainTitle";
import PrincipalTitle from "../components/PrincipalTitle";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import ButtonIcon from "../components/ButtonIcon";
import { ChevronRight } from "lucide-react";

export default function ContactPage () {
    return(
        <main>
            <section className="w-full m-auto container lg:max-w-4/5 px-4 sm:px-12 lg:px-6 mb-32 md:mb-48 pt-16">
                <PrincipalTitle>Contato</PrincipalTitle>
                <div className="bg-vox-2 border-[.5px] border-vox-5 py-12 px-24">
                    <MainTitle>Solicite uma cotação</MainTitle>
                    <p>
                        Estamos muito animados com o seu interesse em transformar e potencializar a sua comunicação com criatividade e inovação! Por favor, preencha o formulário abaixo para que possamos criar uma proposta personalizada, alinhada às suas necessidades e aos valores do seu negócio. Juntos, vamos inspirar, inovar e deixar uma marca positiva em cada projeto.
                    </p>
                    <form className="w-full my-6">
                        <div className="flex flex-col gap-6">
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
                        <ButtonIcon
                            type={"submit"}
                        >
                            Batata 
                            <ChevronRight />
                        </ButtonIcon>
                    </form>
                    <MainTitle>Outras formas de contato</MainTitle>
                    <div>
                        email
                        tel
                    </div>
                </div>
            </section>
        </main>
    );
}