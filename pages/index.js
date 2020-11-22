import { useState } from 'react'

function Home() {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Click here</button>
            <span>{ counter }</span>
        </>
    )
}
export default Home