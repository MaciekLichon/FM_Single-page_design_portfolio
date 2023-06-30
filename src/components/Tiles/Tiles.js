import Container from '../Container/Container';
import Tile from '../Tile/Tile';

import patternGraphic from '../../assets/pattern-graphic-design.svg';
import patternUI from '../../assets/pattern-ui-ux.svg';
import patternApps from '../../assets/pattern-apps.svg';
import patternIllustrations from '../../assets/pattern-illustrations.svg';
import patternPhotography from '../../assets/pattern-photography.svg';
import patternMotion from '../../assets/pattern-motion-graphics.svg';

const tilesDetails = [
    {
        title: 'Graphic Design',
        pattern: patternGraphic,
        bg_color: 'bg-purple'
    },
    {
        title: 'UI/UX',
        pattern: patternUI,
        bg_color: 'bg-orange'
    },
    {
        title: 'Apps',
        pattern: patternApps,
        bg_color: 'bg-pink'
    },
    {
        title: 'Illustrations',
        pattern: patternIllustrations,
        bg_color: 'bg-red'
    },
    {
        title: 'Photography',
        pattern: patternPhotography,
        bg_color: 'bg-teal'
    },
    {
        title: 'Motion Graphics',
        pattern: patternMotion,
        bg_color: 'bg-claret'
    },
]
const Tiles = () => {
    return (
        <section className="mt-8 md:mt-16 lg:mt-20">
            <Container>
                <div className="grid_template">
                    {tilesDetails.map(tile => (
                        <Tile title={tile.title} pattern={tile.pattern} bg_color={tile.bg_color} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Tiles;
