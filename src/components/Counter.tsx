import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(1)
    return (
        <button onClick={() => setCount(count + 1)}>
            Value {count}
        </button>
    )
}

export default Counter
