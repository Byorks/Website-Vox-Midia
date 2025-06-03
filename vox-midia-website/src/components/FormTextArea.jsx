export default function FormTextArea ({id, name, placeholder, label}) {
    return (
        <div className="flex flex-col"> 
            <label className="font-league-spartan text-vox-7" htmlFor={name}>{label}</label>
            <textarea required className="bg-vox-3 border border-vox-6 text-vox-8 placeholder:text-vox-5 text-base rounded-[8px] py-4 px-3 focus:bg-vox-2 focus:border-vox-7 focus:outline-0" name={name} id={id} placeholder={placeholder}></textarea>
        </div> 
    ); 
}