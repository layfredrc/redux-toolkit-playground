import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState('0')

    const addValue = Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }

    return (
        <section>
            <p>{count}</p>
            <div className=''>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type='text'
                name=''
                id=''
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div className=''>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>
                    Add Amount
                </button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </section>
    )
}

export default Counter
