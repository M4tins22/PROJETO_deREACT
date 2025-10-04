export default function Contador() {
    let count = 0;

    function clique(){
        count++;
        console.log(count);
    }

    return (
        <>
            <label>Contador</label>
            <br />
            <button onClick={count}>
                Contagem : {count}
            </button>

            <h1>vermelho</h1>
        </>
    )
} 