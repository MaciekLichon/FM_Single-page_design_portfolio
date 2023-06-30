import Container from '../Container/Container';

const Hero = () => {
    return (
        <section>
            <Container>
                <div className="text-center">
                    <h1 className="header mb-4 md:mb-7 lg:mb-6">Design solutions made easy</h1>
                    <p className="px-7 max-w-[730px] mx-auto md:px-12 lg:px-0">With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
