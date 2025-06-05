export default function FormInput ({type, name , id, label, placeholder, required}) {
    // TODO -> Descobrir como deixar o label com cor diferente com focus
    return (
        <div className="flex flex-col ">
            <label className="font-league-spartan text-vox-7 font-medium mb-1" htmlFor={name}>{label}</label>
            <input required className="bg-vox-3 border border-vox-6 text-vox-8 placeholder:text-vox-5 text-base rounded-[8px] py-4 px-3 focus:bg-vox-2 focus:border-vox-7 focus:outline-0" type={type} name={name} id={id} placeholder={placeholder} />
        </div>
    );
}