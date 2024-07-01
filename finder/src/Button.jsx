export default function Button({value,isSelected,onSelect}){
    return(
        <button className={isSelected?"active":null} onClick={onSelect}>{value}</button>
    )
}
