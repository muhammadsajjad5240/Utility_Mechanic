import React from 'react';
import { Parallax, Background } from 'react-parallax';
 
const Paralax = () => (
    <div>
        <Parallax
            bgImage={require('../../Images/carpanter.jpg')}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax>
        {/* -----basic config-----*/}
        <Parallax
            blur={10}
            bgImage={require('../../Images/Fimage.jpg')}
            bgImageAlt="the cat"
            strength={500}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '500px' }} />
        </Parallax>
        <Parallax
            bgImage={require('../../Images/carpanter.jpg')}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax>
 
        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../Images/Electric.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '400px' }} />
        </Parallax>
 
        {/* -----custom background element-----*/}
        <Parallax strength={300}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
            </Background>
        </Parallax>
 
        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
            bgImage={require('../../Images/carpanter.jpg')}
            strength={200}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax>
    </div>
);
export default Paralax;