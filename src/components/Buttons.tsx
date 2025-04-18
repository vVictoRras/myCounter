
type ButtonsProps = {
    onClick: () => void;
    title: string;
    disabled: boolean;
}

export const Buttons = ({onClick,title,disabled}:ButtonsProps) => {
    return (
        <div>
            <button onClick={onClick} disabled={disabled}>{title}</button>
        </div>
    );
};

