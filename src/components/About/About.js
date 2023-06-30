import Container from '../Container/Container';

import photo from '../../assets/image-amy.webp';
const About = () => {
    return (
        <section className="mt-24 md:mt-28 lg:mt-36">
            <Container>
                <div className="flex_centered flex-col gap-10 md:flex-row md:gap-1 lg:gap-32">
                    <img src={photo} alt="amy" className="rounded-full w-[300px] h-[300px] md:w-[364px] md:h-[364px] md:-translate-x-20 lg:translate-x-0 lg:w-[445px] lg:h-[445px]"/>
                    <div className="flex_centered gap-6 flex-col text-center md:text-left lg:gap-8">
                        <h2 className="header">I’m Amy, and I’d love to work on your next project</h2>
                        <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
                        <button className="btn btn_orange md:self-start">Free Consultation</button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
