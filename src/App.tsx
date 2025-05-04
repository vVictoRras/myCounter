import { useState, useEffect } from 'react'
import './App.css'
import { Buttons } from "./components/Buttons.tsx";
import { Display } from "./components/Display.tsx";
import { Settings } from "./components/Settings.tsx";

function App() {
    const [showSettings, setShowSettings] = useState(false);
    const [count, setCount] = useState(0);
    const [maxVal, setMaxVal] = useState(5);

    // Загрузка начальных значений из localStorage при монтировании
    useEffect(() => {
        const savedStartValue = Number(localStorage.getItem("startValue"));
        const savedMaxValue = Number(localStorage.getItem("maxValue"));

        if (!isNaN(savedStartValue)) {
            setCount(savedStartValue);
        }

        if (!isNaN(savedMaxValue)) {
            setMaxVal(savedMaxValue);
        }
    }, []);

    // Получение минимального значения
    const minValue = () => {
        const start = localStorage.getItem("startValue");
        return Number(start) || 0;
    }

    const incrementCountHandler = () => {
        setCount(prev => {
            const newCount = prev + 1;
            return newCount > maxVal ? prev : newCount; // Защита от превышения maxVal
        });
    }

    const resetCountHandler = () => {
        const start = minValue();
        setCount(start);
    }

    const toggleView = () => {
        setShowSettings(!showSettings);
    };

    const handleCloseSettings = () => {
        setShowSettings(false);
        // После закрытия настроек обновляем значения из localStorage
        const savedStartValue = Number(localStorage.getItem("startValue"));
        const savedMaxValue = Number(localStorage.getItem("maxValue"));

        if (!isNaN(savedStartValue)) {
            setCount(savedStartValue);
        }

        if (!isNaN(savedMaxValue)) {
            setMaxVal(savedMaxValue);
        }
    };

    return (
        <div className="wrapper">
            <div className="container">
                {showSettings ? (
                    <Settings onClose={handleCloseSettings} />
                ) : (
                    <>
                        <Display count={count} maxValue={maxVal} />
                        <div className='button'>
                            <Buttons
                                disabled={count >= maxVal}
                                title={'inc'}
                                onClick={incrementCountHandler}
                            />
                            <Buttons
                                disabled={count === minValue()}
                                title={'reset'}
                                onClick={resetCountHandler}
                            />
                            <Buttons
                                title={'set'}
                                onClick={toggleView}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default App