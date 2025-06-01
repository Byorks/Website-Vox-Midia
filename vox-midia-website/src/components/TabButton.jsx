export default function TabButton({ children, onSelect, isSelected }) {
  let className = `min-w-[168px] px-3 py-2 bg-vox-2  border border-vox-4 active:border-vox-5 rounded-vox-5 *:text-pt-sans *:text-base *:text-vox-6 *:active:text-vox-8 *:font-bold text-tr *:[text-edge:cap] *:[leading-trim:both] ${isSelected ? "border-vox-8 *:text-vox-8 transition-all ease-in-out" : undefined}`;

  if (isSelected) {
    className += " active"
    console.log(isSelected + " foi selecionado ")
  }

  return (
    <li>
      {/* TO-DO -> Não está aparecendo o botao */}
      <button className={className} onClick={onSelect}>
        <span className="w-full">{children}</span>
      </button>
    </li>
  );
}
