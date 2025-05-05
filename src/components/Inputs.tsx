import {ChangeEvent} from "react";
import TextField from "@mui/material/TextField";

type InputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className: string;
 }

export const CustomInput = ({onChange,value,className} :InputProps) => {

    return (
        <div>
            <TextField type="number" onChange={onChange}
                       variant={"filled"}
                       value={value}
                       className={className}
                       color="success"/>
        </div>
    );
};
