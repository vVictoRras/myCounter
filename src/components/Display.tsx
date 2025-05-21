import {useTheme} from "@mui/material";
import {RootState} from "../app/store.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";


export const Display = () => {
    const theme = useTheme();

   const counter=useAppSelector((state:RootState) => state.counter.value)
    const max=useAppSelector((state:RootState) => state.counter.maxValue)



    if (counter !== undefined) {
        const isRed = max !== undefined && counter === max;
        return <span
            style={{
                color: isRed ? 'red' : theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.main,
            }}
            className={`display`}>{counter}

                </span>;
    }

    return null;
};