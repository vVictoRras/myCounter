import {ChangeEvent} from "react";

type InputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className: string;
 }

export const Inputs = ({onChange,value,className} :InputProps) => {

    return (
        <div>
            <input type="number" onChange={onChange} value={value} className={className}/>
        </div>
    );
};
