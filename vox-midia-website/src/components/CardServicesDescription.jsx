import SecondaryTitle from "./SecondaryTitle";

export default function ServiceDescriptionCard ({title, description, children}) {
    return (
        <div className="min-w-[264px] min-h-[240px] max-w-[309px] aspect-card-details py-8 px-4 flex flex-col border-[.5px] border-vox-7 rounded-vox-5 bg-vox-3">
            <div className="w-full flex items-center justify-center mb-3">
                <h3 className="text-league-spartan font-semibold text-xl text-vox-8 text-center">{title}</h3>
            </div>
            <div className="w-full h-auto rounded-b-[5px]">
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
}