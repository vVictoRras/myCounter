import {useTheme} from "@mui/material";

type DisplayProps = {
    count: number;
    maxValue: number;

};

export const Display = ({ count, maxValue, }: DisplayProps) => {
    const theme = useTheme();
    if (count !== undefined) {
        const isRed = maxValue !== undefined && count === maxValue;
        return <span
            style={{
                color: isRed ? 'red' : theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.main,
            }}
            className={`display`}>{count}

                </span>;
    }

    return null;
};