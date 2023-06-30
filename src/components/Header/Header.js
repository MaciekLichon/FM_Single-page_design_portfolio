import logo from '../../assets/logo.svg';
import Container from '../Container/Container';
const Header = () => {
    return (
        <header className="mt-4 mb-8
            md:mt-9 md:mb-16"
        >
            <Container>
                <div className="flex_betweened">
                    <img src={logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16"/>
                    <button className="btn btn_dark">Free Consultation</button>
                </div>
            </Container>
        </header>
    );
};

export default Header;
