const Container = (props) => {
    return (
        <div className="max-w-[1110px] mx-auto px-4
            md:px-10"
        >
            {props.children}
        </div>
    );
};

export default Container;
