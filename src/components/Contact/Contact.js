import Container from '../Container/Container';

const Contact = () => {
    return (
        <section className="mt-24 mb-10 md:mt-28 md:mb-14 lg:mt-20">
            <Container>
                <div className="bg-black py-12 px-6 rounded-[10px] flex flex-col gap-6 md:pt-14 md:px-[75px] md:pb-16 lg:flex-row lg:justify-between">
                    <div className="text-center lg:text-left">
                        <h2 className="header text-light mb-6">Book a call with me</h2>
                        <p className="text-light lg:max-w-[540px]">I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
                    </div>
                    <button className="btn btn_orange self-center shrink-0">Free Consultation</button>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
