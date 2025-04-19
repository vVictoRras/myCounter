import React, {ChangeEvent, useState} from 'react';
import {Buttons} from "./Buttons.tsx";
import {Inputs} from "./Inputs.tsx";

export const Settings = () => {
    const [startValue, setstartValue] = useState('');
    const [maxValue, setMaxValue] = useState('');



    const setToLocalStorage = () => {
        localStorage.setItem('countValue', JSON.stringify(startValue))
        localStorage.setItem('maxCountValue', JSON.stringify(maxValue))

    }

    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setstartValue(event.target.value);
    }

    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(event.target.value);
    }


    return (
        <>
            <div className="wrapper">
                <div className="container">

                    <div >
                        <span>Max Value</span>
                        <Inputs value={startValue} onChange={onChangeStartHandler}/>
                        <span>Start Value</span>
                        <Inputs value={maxValue} onChange={onChangeMaxValueHandler}/>
                    </div>
                    <Buttons title={'set'}
                             onClick={setToLocalStorage}/>
                </div>
            </div>

        </>
    );
};

