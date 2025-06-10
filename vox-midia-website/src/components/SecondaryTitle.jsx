export default function SecondaryTitle (props) {
    let textAlign = "text-center";
    
    if(props.textAlign != undefined) {
        textAlign = props.textAlign;
    }
     
    return (
        <h3 className={`text-league-spartan text-2xl text-vox-8 font-semibold ${textAlign} ${props.spacing}`}>{props.children}</h3>
    );
}