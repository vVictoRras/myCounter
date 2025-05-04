type DisplayProps = {
    count: number;
    maxValue: number;

};

export const Display = ({ count, maxValue, }: DisplayProps) => {

    if (count !== undefined) {
        const isRed = maxValue !== undefined && count === maxValue;
        return <span className={`display${isRed ? " red" : ""}`}>{count}</span>;
    }

    return null;
};