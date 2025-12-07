import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)


const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    
    useGSAP(()=>{
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card,index)=> {
        gsap.fromTo(card,
            {y: 50, opacity: 0}, 
            {y: 0 ,opacity: 1, duration: 1, delay: 0.3 * (index + 1), scrollTrigger: {trigger: card, start: 'top bottom-=100'}}
        )
    })
        gsap.fromTo(sectionRef.current, {opacity: 0}, {opacity: 1, duration: 1.5})
    }, []);

    return (
        <section ref={sectionRef} id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Gauche */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper border-amber-50 border-2 rounded-xl">
                            <img src="/images/project1.png" alt="Portfolio" />
                        </div>
                        <div className="text-content">
                            <h2>Un portfolio moderne pour présenter mes compétences et mes projets de manière simple, visuelle et professionnelle.</h2>
                            <p className="text-white-50 md:text-xl">Cette application a été développée avec React et TailwindCSS pour offrir une interface moderne, rapide et responsive.</p>
                        </div>
                    </div>

                    {/* Droite */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="">
                                <img className="border-2 rounded-2xl" src="/images/project2.png" alt="site internet 3d" />
                            </div>
                            <h2>Site Internet 3D</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="">
                                <img className="border-2 rounded-2xl" src="/images/project3.png" alt="Medico" />
                            </div>
                            <h2>Medico - Application Gestion Médical</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ShowcaseSection