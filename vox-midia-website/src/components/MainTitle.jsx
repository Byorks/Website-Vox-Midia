export default function MainTitle (props) {
    // Classe margin botton padrão com 32px
    let marginBotton = "mb-8";

    let textAlign = "text-center";

    let textSize = "text-3xl";

    if(props.marginBotton != undefined ){
        marginBotton = props.marginBotton;
    }

    if(props.textAlign != undefined ){
        textAlign = props.textAlign;
    }

    if(props.textSize != undefined ){
        textSize = props.textSize;
    }

   
    return  <h2 className={`${marginBotton} ${textAlign} ${textSize} font-semibold font-league-spartan text-vox-8`}>{props.children}</h2>
}