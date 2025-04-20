import {useState} from 'react'
import './App.css'
import {Buttons} from "./components/Buttons.tsx";
import {Tablo} from "./components/Tablo.tsx";

function App() {
    //const [count, setCount] = useState(0)

    const [count, setCount] = useState<number>(() => {
        return Number(localStorage.getItem("startValue")) || 0;
    });

    const [maxVal, setMaxVal] = useState<number>(() => {
        return Number(localStorage.getItem("maxValue")) || 5;
    });



    const minValue = () => {
        const start= localStorage.getItem( "startValue")
        return Number(start)
        }


    const maxValue = () => {
        const max= localStorage.getItem( "maxValue")
        return Number(max)
        }


    const incrementCountHandler = () => {
        setCount(count => count + 1)
    }

    const resetCountHandler = () => {
     const start = minValue();
     setCount(start)
    }

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <Tablo count={count}
                           maxValue={maxVal}
                    />
                    <div className='button'>
                        <Buttons disabled={count >= maxVal}
                                 title={'inc'}
                                 onClick={incrementCountHandler}/>

                        <Buttons disabled={count === minValue()}
                                 title={'reset'}
                                 onClick={resetCountHandler}/>

                    </div>

                </div>
            </div>

        </>
    )
}

export default App
