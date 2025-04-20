import React, {ChangeEvent, useState} from 'react';
import {Buttons} from "./Buttons.tsx";
import {Inputs} from "./Inputs.tsx";



export const Settings = () => {
    const [startValue, setStartValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    const onStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(event.target.value);
    };

    const onMaxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(event.target.value);
    };

    const setToLocalStorage = () => {
        localStorage.setItem('startValue', startValue);
        localStorage.setItem('maxValue', maxValue);
        window.location.reload();
    };

    return (
        <>
            <div className="wrapper">
                <div className="container">

                    <div >
                        <label>Start value</label>
                        < Inputs value={startValue} onChange={onStartChangeHandler}/>
                        <label>Max value</label>
                        <Inputs  value={maxValue} onChange={onMaxChangeHandler}/>
                    </div>
                    <div className={'button'}>
                        <Buttons title={'set'}
                                 onClick={setToLocalStorage}/>
                    </div>

                </div>
            </div>

        </>
    );
};

