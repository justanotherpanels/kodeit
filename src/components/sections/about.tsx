import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <section id="about" className="mt-[140px]">
            <div className="container">
                <div className="flex lg:flex-row flex-col gap-25 items-center">
                    {/* START ABOUT IMAGE DESIGN AREA */}
                    <div className="lg:w-[40%] w-full flex-shrink flex-grow-0 basis-auto">
                        <SlideUp delay={3}>
                            <div className="about-image-part relative">
                                <img src="/images/about/about.jpg" alt="About Me" />
                                <div className="flex items-center rounded-[32px] bg-primary py-2.5 pr-[25px] pl-[15px] absolute left-[25%] bottom-[25%]">
                                    <h6 className="font-bold text-black">Available for Work</h6>
                                    <div className="w-[15px] h-[15px] rounded-full bg-[#19461a] ml-3 pulse" />
                                </div>
                                <div className="absolute -left-[10%] top-[25%] rotated_circle">
                                    <img src="/images/shape/about-dot.png" alt="Shape" />
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* / END ABOUT IMAGE DESIGN AREA */}
                    {/* START ABOUT TEXT DESIGN AREA */}
                    <div className="lg:w-[58%] w-full flex-shrink flex-grow-0 basis-auto">
                        <div className="about-content-part rel z-2 rmb-55">
                            <SectionTitle className="mb-35">
                                <SectionTitle.Name>Tentang Kami</SectionTitle.Name>
                                <SectionTitle.Title>Saatnya Kembangkan <span className="text-primary">Bisnismu</span> Dengan Membuat Website</SectionTitle.Title>
                                <SectionTitle.Description>Serahkan pembuatan website impian Anda kepada kami. Dengan penuh dedikasi dan kehormatan, kami siap membantu mewujudkan situs web yang Anda dambakan, memastikan setiap detail terpenuhi dengan sempurna untuk menghadirkan solusi digital yang unggul dan memenuhi ekspektasi tertinggi Anda.</SectionTitle.Description>
                            </SectionTitle>
                        </div>
                    </div>
                    {/* / END ABOUT TEXT DESIGN AREA */}
                </div>
            </div>
        </section>

    )
}

export default About