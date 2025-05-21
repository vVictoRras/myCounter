import {ChangeEvent, useEffect, useState} from 'react';
import {CustomButton} from "./Buttons.tsx";
import {CustomInput} from "./Inputs.tsx";
import {Box, Container} from "@mui/material";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {RootState} from "../app/store.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {setMaxValue, setMinValue} from "../app/counterSlice.ts";

type SettingsProps = {
       onClose: () => void;
}

export const Settings = ({ onClose }: SettingsProps) => {
    const dispatch = useAppDispatch()
    const {minValue, maxValue} = useAppSelector((state:RootState) => state.counter)

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Validate whenever minValue or maxValue changes
        if (minValue >= maxValue) {
            setError('Min value must be less than max value');
        } else if (minValue < 0) {
            setError('Min value cannot be negative');
        } else {
            setError(null);
        }
    }, [minValue, maxValue]);

    const onStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value)) {
            dispatch(setMinValue(value));
        }
    };

    const onMaxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value)) {
            dispatch(setMaxValue(value));
        }
    };
    const handleSave = () => {
        if (!error) {
            onClose();
        }
    };
    return (
        <Container className={'container'}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <label>Start value</label>
                <CustomInput
                    value={minValue}
                    className={error ? 'error' : ''}
                    onChange={onStartChangeHandler}

                />
                <label>Max value</label>
                <CustomInput
                    value={maxValue}
                    className={error ? 'error' : ''}
                    onChange={onMaxChangeHandler}

                />

                <Box sx={{ mt: 2 }}>
                    <CustomButton
                        title={'set'}
                        onClick={handleSave}
                        disabled={!!error}
                    />
                </Box>
            </Box>
        </Container>

    );
};