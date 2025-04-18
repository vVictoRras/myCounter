type TabloProps = {
    count: number;
    maxValue: number
}

export const Tablo = ({count, maxValue}: TabloProps) => {
    return (
        <>
            <span className={count === maxValue ? "display red" : "display"}>{count}</span>
        </>
    );
};

