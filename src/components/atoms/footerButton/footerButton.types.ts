export type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: string;
    disabled?: boolean;
    type?: 'submit' | 'button';
    block?: boolean;
};