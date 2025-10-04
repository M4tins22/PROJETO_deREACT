import {useState} from "react";

export default function Contador() {
    const [count, setCount] = useState(0);

    function clique(){
        setCount(count+1);
        console.log(count);
    }

    return (
        <>
            <label>Contador</label>
            <br />
            <button onClick={clique}>
                Contagem : {count}
            </button>

            <h1>MARTINS</h1>
        </>
    )
} 