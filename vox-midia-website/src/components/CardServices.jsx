import SecondaryTitle from "./SecondaryTitle";

export default function ServiceCard (props) {
    return (
        <div className="max-w-[360px] max-h-[410px] ratio-3/5 flex flex-col border-[.5px] border-vox-7 rounded-vox-5 bg-vox-2">
            <div className="w-full flex items-center justify-center md:py-6 lg:py-9">
                <SecondaryTitle>{props.children}</SecondaryTitle>
            </div>
            <div className="w-full h-auto rounded-b-[5px]">
                <img className="w-full h-auto object-cover" src="https://unsplash.it/640/425?image=40" alt="" />
            </div>
        </div>
    );
}