
type InputProps = {
    onChange: () => void;
    value: string;
 }

export const Inputs = ({onChange,value} :InputProps) => {

    return (
        <div>
            <input type="number" onChange={onChange} value={value} />
        </div>
    );
};
