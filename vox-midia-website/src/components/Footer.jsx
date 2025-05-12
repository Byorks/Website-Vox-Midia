import MainTitle from "./MainTitle";

export default function MainFooter() {
  return (
    <>
      <footer className="bg-vox-2  columns-2 w-screen @container">
        <div className="@md:w-[80%] m-auto max-w-[1128px]"> 
          <div className="flex flex-col" >
            <MainTitle>Conheça mais</MainTitle>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div>
              <MainTitle>Fale com a Vox & Mídia</MainTitle>
              <div>
                <img src="" alt="" />
                <p></p>
              </div>
              <div>
                <img src="" alt="" />
                <p></p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <MainTitle>Nossas mídias sociais</MainTitle>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper non augue in lobortis. Donec sem sapien, blandit id
                elementum sed, tristique id est. Vivamus eleifend lorem eget
                eros blandit facilisis eu eu mi. Quisque semper cursus
                ullamcorper. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Curabitur a tortor
                quis nisl suscipit facilisis tempus id ligula. Donec rutrum sit
                amet sapien id ornare. Suspendisse quis ullamcorper eros. Fusce
                aliquam sem ut hendrerit tincidunt. Suspendisse id diam quam.
                Quisque vitae velit tortor.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
