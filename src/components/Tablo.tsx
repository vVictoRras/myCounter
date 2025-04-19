type TabloProps = {
    count: number;
    maxValue: number;

};

export const Tablo = ({ count, maxValue, }: TabloProps) => {

    if (count !== undefined) {
        const isRed = maxValue !== undefined && count === maxValue;
        return <span className={`display${isRed ? " red" : ""}`}>{count}</span>;
    }

    return null;
};