import { useState } from 'react'

function Home() {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", backgroundColor: "blueviolet", width: "100%", height: "100%"}}>
                <button onClick={() => setCounter(counter + 1)}>Click here</button>
                <span>{counter}</span>
            </div>
        </>
    )
}
export default Home