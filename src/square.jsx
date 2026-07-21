
export default function Square({id,borderFun,value, onSquareClick}){
    return <button key={id} className={`square w-16 h-16 border-2 border-black text-2xl ${borderFun(id) || ""}`} onClick={onSquareClick}>{value}</button>;
}

