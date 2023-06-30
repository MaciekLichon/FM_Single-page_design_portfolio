const Tile = ({title, pattern, bg_color}) => {
    return (
        <div className={`tile ${bg_color}`}>
            <img src={pattern} alt="pattern"/>
            <p>{title}</p>
        </div>
    );
};

export default Tile;
