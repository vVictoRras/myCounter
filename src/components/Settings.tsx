import React, {ChangeEvent, useState} from 'react';
import {Buttons} from "./Buttons.tsx";
import {Inputs} from "./Inputs.tsx";


export const Settings = () => {
    const [startValue, setStartValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [error, setError] = useState<string | null>(null)

    const onStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(event.target.value);
    };

    const onMaxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(event.target.value);
    };

    const setToLocalStorage = () => {
            if (validInputs()){
                localStorage.setItem('startValue', startValue);
                localStorage.setItem('maxValue', maxValue);
                window.location.reload();

            }

    };

    const validInputs=():boolean=>{
        const start=Number(startValue)
        const max=Number(maxValue)
        if (startValue === '' || maxValue === '') {
            setError('Both fields are required');
            return false;
        }

        if (isNaN(start) || isNaN(max)) {
            setError('Please enter valid numbers');
            return false;
        }

        if (start < 0 || max < 0) {
            setError('Value cannot be negative');
            return false;
        }

        if (start >= max) {
            setError('Start value must be less than max value');
            return false;
        }

        setError(null);
        return true;
    }


    return (
        <>
            <div className="wrapper">
                <div className="container">

                    <div>
                        <label>Start value</label>
                        < Inputs value={startValue} className={error ? 'error' : ''} onChange={onStartChangeHandler}/>
                        <label>Max value</label>
                        <Inputs value={maxValue} className={error ? 'error' : ''} onChange={onMaxChangeHandler}/>
                    </div>
                    {error && <div className={'error-message'}>{error}</div>}
                    <div className={'button'}>
                        <Buttons title={'set'}
                                 onClick={setToLocalStorage}/>
                    </div>
                </div>
            </div>

        </>
    );
};

