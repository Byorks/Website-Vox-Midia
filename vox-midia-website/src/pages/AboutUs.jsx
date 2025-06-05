import PrincipalTitle from "../components/PrincipalTitle";
import MainTitle from "../components/MainTitle";
import MainButton from "../components/MainButton";


export default function AboutUsPage() {
  return (
    <main>
      <section className="w-full m-auto container lg:max-w-4/5 px-4 sm:px-12 lg:px-6 pt-16 mb-32">
        <PrincipalTitle>Sobre nós</PrincipalTitle>
        <div className="bg-vox-2 border-[.5px] border-vox-5 px-6 py-24 md:py-12 md:px-24 flex items-center flex-col mb-16 gap-6 md:gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="231"
            height="102"
            viewBox="0 0 231 102"
            fill="none"
          >
            <path
              d="M70.8985 101.774H68.9815L64.3809 90.1128H66.2126C66.5676 90.1128 66.88 90.3246 66.9936 90.6634L69.9045 98.6257H69.9329L72.8439 90.6634C72.9574 90.3246 73.284 90.1128 73.6248 90.1128H75.4566L70.8843 101.774H70.8985Z"
              fill="white"
            />
            <path
              d="M78.7506 101.153C77.8276 100.616 77.0892 99.8821 76.5496 98.9644C76.01 98.0468 75.7402 97.0162 75.7402 95.915C75.7402 94.8138 76.01 93.7832 76.5496 92.8656C77.0892 91.9479 77.8134 91.2279 78.7506 90.6915C79.6877 90.155 80.6959 89.9009 81.8177 89.9009C82.9395 89.9009 83.9618 90.1691 84.8848 90.6915C85.8078 91.2138 86.5462 91.9479 87.0858 92.8656C87.6253 93.7832 87.8809 94.7997 87.8809 95.915C87.8809 97.0303 87.6111 98.0468 87.0858 98.9644C86.5604 99.8821 85.822 100.616 84.8848 101.153C83.9476 101.689 82.9395 101.957 81.8177 101.957C80.6959 101.957 79.6735 101.689 78.7506 101.153ZM83.7062 99.2891C84.2884 98.9503 84.7428 98.4703 85.0836 97.8915C85.4244 97.3126 85.5948 96.6491 85.5948 95.9291C85.5948 95.2091 85.4244 94.5456 85.0836 93.9668C84.7428 93.3738 84.2884 92.9079 83.692 92.5691C83.0957 92.2303 82.4851 92.0609 81.8177 92.0609C81.1503 92.0609 80.5113 92.2303 79.9433 92.5691C79.3753 92.9079 78.8926 93.3879 78.5518 93.9668C78.211 94.5456 78.0406 95.2091 78.0406 95.9291C78.0406 96.6491 78.211 97.2985 78.5518 97.8915C78.8926 98.4844 79.3469 98.9503 79.9433 99.2891C80.5255 99.6279 81.1503 99.7974 81.8177 99.7974C82.4851 99.7974 83.1241 99.6279 83.692 99.2891H83.7062Z"
              fill="white"
            />
            <path
              d="M90.65 101.774H87.9805L92.0416 95.7881L88.2361 90.1128H90.934L93.4331 94.094L95.9181 90.1128H98.6302L94.9099 95.7881L98.9 101.774H96.2163L93.4331 97.4257L90.65 101.774Z"
              fill="white"
            />
            <path
              d="M115.201 101.774H112.716L111.878 100.701C111.381 101.125 110.841 101.449 110.245 101.675C109.649 101.901 109.038 102.014 108.371 102.014C107.533 102.014 106.766 101.845 106.084 101.52C105.389 101.181 104.835 100.729 104.437 100.108C104.025 99.4869 103.812 98.781 103.812 97.9622C103.812 97.3834 103.926 96.8469 104.167 96.3104C104.409 95.774 104.735 95.3081 105.176 94.9128C105.616 94.5034 106.113 94.2069 106.681 94.0093L105.105 91.9763V90.1128H112.517V90.5504C112.517 91.4681 111.764 92.2163 110.841 92.2163H107.788L111.835 97.4257C112.134 96.6634 112.29 95.8163 112.318 94.8704H112.503C113.582 94.8704 114.391 95.8728 114.136 96.9034C114.121 96.974 114.093 97.0587 114.079 97.1293C113.88 97.8634 113.582 98.5551 113.198 99.1763L115.215 101.788L115.201 101.774ZM110.657 99.1198L107.845 95.5057C107.476 95.5481 107.149 95.6751 106.88 95.8728C106.61 96.0704 106.397 96.3246 106.255 96.6351C106.113 96.9316 106.042 97.2422 106.042 97.5669C106.042 98.0751 106.155 98.4987 106.397 98.8375C106.624 99.1904 106.936 99.4446 107.32 99.614C107.703 99.7834 108.143 99.8822 108.612 99.8822C109.393 99.8822 110.06 99.6281 110.657 99.1198Z"
              fill="white"
            />
            <path
              d="M121.776 101.774H120.242L121.676 90.1128H123.636C123.991 90.1128 124.317 90.3387 124.431 90.6916L127.058 98.654L129.671 90.6916C129.784 90.3528 130.111 90.1128 130.466 90.1128H132.411L133.845 101.788H132.312C131.886 101.788 131.531 101.463 131.488 101.04L130.707 93.7128L128.038 101.774H126.078L123.409 93.7128L122.614 101.04C122.557 101.463 122.216 101.774 121.79 101.774H121.776Z"
              fill="white"
            />
            <path
              d="M139.341 87.374L137.438 89.294H135.748L137.097 87.374H139.341ZM138.176 101.774H135.918V90.1129H138.176V101.774Z"
              fill="white"
            />
            <path
              d="M140.975 101.774V90.1128H145.206C146.328 90.1128 147.364 90.3669 148.302 90.8751C149.239 91.3834 149.977 92.0893 150.517 92.9787C151.056 93.8822 151.34 94.8563 151.34 95.9434C151.34 97.0304 151.071 98.0046 150.531 98.894C149.991 99.7834 149.253 100.475 148.316 100.997C147.379 101.506 146.356 101.76 145.235 101.76H140.975V101.774ZM145.306 99.6281C146.001 99.6281 146.64 99.4728 147.208 99.1481C147.776 98.8234 148.231 98.3857 148.557 97.821C148.884 97.2563 149.04 96.6351 149.04 95.9293C149.04 95.2234 148.87 94.6022 148.543 94.0375C148.216 93.4728 147.762 93.0351 147.194 92.7104C146.626 92.3857 145.987 92.2304 145.277 92.2304H143.232V99.6281H145.306Z"
              fill="white"
            />
            <path
              d="M155.699 101.774H153.441V90.1128H155.699V101.774Z"
              fill="white"
            />
            <path
              d="M168.435 101.774H166.092L165.269 99.5292H160.37L159.546 101.774H157.203L161.818 90.0845H163.82L168.421 101.774H168.435ZM162.713 93.1621L161.08 97.6092H164.559L162.926 93.1621L162.812 92.7668L162.698 93.1621H162.713Z"
              fill="white"
            />
            <path
              d="M44.8993 80.4141H31.6652L0 0H8.71859C13.5039 0 17.7922 2.99294 19.4251 7.46824L38.1687 58.6588H38.3391L57.0258 7.46824C58.673 2.99294 62.9471 0 67.7466 0H76.4509L44.9135 80.4H44.8993V80.4141Z"
              fill="white"
            />
            <path
              d="M145.405 80.4141H128.252L122.444 72.9741C119.022 75.8682 115.287 78.1129 111.212 79.6659C107.151 81.2329 102.849 82.0094 98.3189 82.0094C92.568 82.0094 87.3 80.8659 82.5147 78.6071C77.7436 76.3341 73.9381 73.0871 71.1124 68.8518C68.2866 64.6165 66.8809 59.6894 66.8809 54.0847C66.8809 50.16 67.676 46.3624 69.2948 42.7059C70.9136 39.0494 73.2139 35.8165 76.1958 33.0353C79.192 30.2541 82.6425 28.1929 86.5616 26.8518L67.9458 5.20941L75.6846 0H126.747C126.747 7.99059 120.229 14.4847 112.178 14.4847H94.2152L122.075 50.3718C124.148 45.1765 125.241 39.3318 125.355 32.7953H125.398C133.619 32.7671 139.612 40.5035 137.496 48.3953C136.118 53.4918 134.102 58.1647 131.461 62.4423L145.391 80.4141H145.405ZM114.081 62.2165L94.6838 37.2565C92.1137 37.5247 89.8985 38.3718 88.0383 39.8118C86.1782 41.2376 84.7582 42.9882 83.8069 45.0494C82.8413 47.1106 82.3727 49.2424 82.3727 51.4588C82.3727 54.9318 83.1679 57.8682 84.7582 60.24C86.3486 62.6118 88.4785 64.4188 91.1481 65.6188C93.8176 66.8188 96.7711 67.4259 100.037 67.4259C105.362 67.4259 110.048 65.6894 114.081 62.2165Z"
              fill="white"
            />
            <path
              d="M145.334 80.4141H137.283L147.124 0H158.54C162.232 0 165.512 2.35765 166.662 5.84471L184.128 58.7718L201.537 5.85882C202.687 2.35765 205.967 0 209.673 0H221.075L230.987 80.4565H222.779C218.477 80.4565 214.884 77.2235 214.43 72.9882L209.346 24.8471L190.986 80.4141H177.468L159.108 24.8471L153.84 72.8471C153.357 77.1529 149.708 80.4141 145.349 80.4141H145.334Z"
              fill="white"
            />
          </svg>
          <p>Comunicação que engaja, tecnologia que reinventa.</p>
        </div>
        <div className="mb-16">
            <MainTitle textAlign="text-left" >Nosso Foco</MainTitle>
            <p>
            Na <strong>Vox & Mídia</strong>, ajudamos empresas corporativas a alcançarem seu potencial máximo através de soluções inovadoras que unem <strong>gamificação, tecnologia e criatividade</strong>. Nosso objetivo é transformar a experiência de trabalho, criando interações marcantes e processos reinventados, sempre com um toque de inovação digital.
            Atuamos desde <strong>branding e identidade visual até captação de imagem e áudio</strong>, garantindo que sua marca se destaque no mundo digital. Combinamos <strong>tecnologia e estratégia criativa</strong> para impulsionar a comunicação e modernizar processos, tornando sua empresa verdadeiramente presente na era da inovação.
            </p>
        </div>

        <div className="w-full grid pb-3 mb-20 md:mb-0">
          <div className="w-full md:w-2/5">
            <MainTitle textAlign="font-left md:font-center"
             marginBotton="mb-6"
            >Visão</MainTitle>
            <p>
              Ser a referência em transformar negócios através da criatividade disruptiva e tecnologia, deixando um legado de inovação e impacto positivo.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center pb-3 mb-20 md:mb-0">
          <div className="w-full md:w-2/5">
            <MainTitle textAlign="font-left md:font-center"
             marginBotton="mb-6"
            >Missão</MainTitle>
            <p>
              Impulsionamos empresas a<strong> superar desafios </strong>com soluções criativas e tecnológicas, onde a gamificação e o design multimídia reinventam experiências e resultados.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end pb-3 mb-20 md:mb-0">
          <div className="w-full md:w-2/5">
            <MainTitle textAlign="font-left md:font-center"
             marginBotton="mb-6"
            >Proposta de Valor</MainTitle>
            <p>
              <strong>Revolucionamos </strong>processos empresariais com tecnologia e criatividade, criando conexões memoráveis e resultados mensuráveis — sempre com transparência e propósito.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-vox-3 w-full flex flex-col justify-center items-center py-24">
          <MainTitle 
            marginBotton="mb-6"
          >
            Solicite um orçamento
          </MainTitle>
          <MainButton>Fale conosco</MainButton>
      </section>
    </main>
  );
}
