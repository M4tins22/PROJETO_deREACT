export { useState } from "react";

export default function ContadorSocial() {
    const [count, setCount] = useState(0);
    return ( )

    function clique(){
        setCount(count + 1 );
        console.log(count);
    }

    return (
        <>
            <button onClick={clique}>
                Contagem Social: {count}
            </button>
        </>
    )
} 