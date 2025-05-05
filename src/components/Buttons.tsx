import Button from "@mui/material/Button";
import {Box} from "@mui/material";

type ButtonsProps = {
    onClick: () => void;
    title: string;
    disabled?: boolean;
}

export const CustomButton = ({onClick,title,disabled}:ButtonsProps) => {
    return (
        <Box>
            <Button
                onClick={onClick}
                variant="contained"
                size="small"
                disabled={disabled}>{title} </Button>
        </Box>
    );
};

