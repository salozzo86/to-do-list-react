const Header = (props) => {
    return (
        <header className="bg-[#F3FFE1] pb-10 pt-10 text-center dark:bg-[#564154]">
            <h1 className="font-['Play'] text-4xl dark:text-white">
                {props.children}
            </h1>
        </header>
    );
};

export default Header;
