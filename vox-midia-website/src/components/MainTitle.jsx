export default function MainTitle (props) {
    // Classe margin botton padrão com 32px
    let marginBotton = "mb-8";

    let textAlign = "text-center";

    if(props.marginBotton != undefined ){
        marginBotton = props.marginBotton;
    }

    if(props.textAlign != undefined ){
        textAlign = props.textAlign;
    }
   
    console.log( props.marginBotton);
    return  <h2 className={`${marginBotton} ${textAlign} font-semibold font-league-spartan text-vox-8 text-2xl`}>{props.children}</h2>
}