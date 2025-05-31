export default function TabButton ( {children, onSelect, isSelected}) {
    return (
        <li>
            {/* TO-DO -> Não está aparecendo o botao */}
            <button className={ isSelected ? 'active' : undefined + "px-9 py-3 active:border-vox-3 *:text-pt-sans *:text-base *:text-vox-6 *:active:text-vox-8"} onClick={onSelect} >{children}</button>
        </li>
    );
}