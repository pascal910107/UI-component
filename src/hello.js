import gsap from 'https://cdn.skypack.dev/gsap@3.12.2'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger';

/**
* THIS IS ONLY USED IF SCROLL-DRIVEN
* ANIMATIONS AREN'T SUPPORTED AND
* THERE ARE NO MOTION PREFERENCES
*/


if (!CSS.supports('animation-timeline: view()') && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.cta', {
        width: 140,
        scale: 1.5,
    })
    gsap.to('.cta', {
        width: '48px',
        scrollTrigger: {
            scrub: 0.1,
            trigger: document.body,
            start: 0,
            end: 100,
        }
    })
    gsap.to('.cta', {
        scale: 1,
        scrollTrigger: {
            scrub: 0.2,
            trigger: document.body,
            start: window.innerHeight * 0.7,
            end: window.innerHeight,
        }
    })
    gsap.set('.icon svg', {
        transformOrigin: '65% 75%',
    })
    gsap.to('.icon svg', {
        rotate: 20,
        repeat: 5,
        yoyo: true,
        scrollTrigger: {
            scrub: 0.2,
            trigger: document.body,
            start: window.innerHeight * 0.2,
            end: window.innerHeight * 0.5,
        }
    })
}