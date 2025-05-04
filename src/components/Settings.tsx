import { ChangeEvent, useState, useEffect } from 'react';
import { Buttons } from "./Buttons.tsx";
import { Inputs } from "./Inputs.tsx";

type SettingsProps = {
    onClose: () => void;
}

export const Settings = ({ onClose }: SettingsProps) => {
    const [startValue, setStartValue] = useState(localStorage.getItem('startValue') || '0');
    const [maxValue, setMaxValue] = useState(localStorage.getItem('maxValue') || '5');
    const [error, setError] = useState<string | null>(null);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        // Валидация при изменении значений
        const start = Number(startValue);
        const max = Number(maxValue);

        if (startValue === '' || maxValue === '') {
            setError('Both fields are required');
            setIsValid(false);
            return;
        }

        if (isNaN(start) || isNaN(max)) {
            setError('Please enter valid numbers');
            setIsValid(false);
            return;
        }

        if (start < 0 || max < 0) {
            setError('Value cannot be negative');
            setIsValid(false);
            return;
        }

        if (start >= max) {
            setError('Start value must be less than max value');
            setIsValid(false);
            return;
        }

        setError(null);
        setIsValid(true);
    }, [startValue, maxValue]);

    const onStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(event.target.value);
    };

    const onMaxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(event.target.value);
    };

    const setToLocalStorage = () => {
        if (isValid) {
            localStorage.setItem('startValue', startValue);
            localStorage.setItem('maxValue', maxValue);
            onClose();
            // Убрал reload - лучше обновлять состояние через props
        }
    };

    return (
        <>
            <div>
                <label>Start value</label>
                <Inputs
                    value={startValue}
                    className={error ? 'error' : ''}
                    onChange={onStartChangeHandler}
                />
                <label>Max value</label>
                <Inputs
                    value={maxValue}
                    className={error ? 'error' : ''}
                    onChange={onMaxChangeHandler}
                />
            </div>
            {error && <div className={'error-message'}>{error}</div>}
            <div className={'button'}>
                <Buttons
                    title={'set'}
                    onClick={setToLocalStorage}
                    disabled={!isValid}
                />
            </div>
        </>
    );
};