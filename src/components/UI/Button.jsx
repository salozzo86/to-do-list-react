const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            type={props.type || 'button'}
            className="focus: shadow-outline rounded border bg-green-400 px-2 font-bold text-white hover:bg-green-700 dark:bg-[#564154]"
        >
            {props.children}
        </button>
    );
};

export default Button;
