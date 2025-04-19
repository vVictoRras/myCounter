import {useState} from 'react'
import './App.css'
import {Buttons} from "./components/Buttons.tsx";
import {Tablo} from "./components/Tablo.tsx";

function App() {
    const [count, setCount] = useState(0)

    const minValue = 0
    const maxValue = 5

    const incrementCountHandler = () => {
        setCount(count => count + 1)
    }

    const resetCountHandler = () => {
        setCount(0)
    }

    // const getFromLocalStorage = () => {
    // let valueAsString= localStorage.getItem( "countValue")
    //     if (valueAsString) {
    //         let newValue=JSON.parse(valueAsString)
    //         setCount(newValue)
    //     }
    // }
    //


    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <Tablo count={count}
                           maxValue={maxValue}
                    />
                    <div className='button-container'>
                        <Buttons disabled={count >= maxValue}
                                 title={'inc'}
                                 onClick={incrementCountHandler}/>

                        <Buttons disabled={count === minValue}
                                 title={'reset'}
                                 onClick={resetCountHandler}/>

                    </div>

                </div>
            </div>

        </>
    )
}

export default App
