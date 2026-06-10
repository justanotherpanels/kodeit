'use client'
import SlideUp from '@/utils/animations/slideUp';
import Button from '../ui/button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {

  return (
    <section id="home" className="pt-[90px]">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-sm-12">
            {/* START HERO DESIGN AREA */}
            <SlideUp className="relative mb-[60px] lg:px-[250px] text-center">
              <h2 className='font-normal text-[rgba(255,255,255,0.69)] text-xl mb-[5px]'>Jasa Pembuatan Website Terpercaya</h2>
              <h1 className='font-bold lg:leading-[95px] lg:text-[70px] md:text-5xl md:leading-[65px] text-[40px] leading-[50px] mb-[25px] text-foreground'>Jasa Website <span className='text-primary'>Custom</span> Terbaik</h1>
              <p className="text-gray text-lg mb-[25px] max-w-3xl mx-auto">Dikembangkan oleh tim berpengalaman dari industri teknologi terkemuka. Fokus utama kita adalah ngebantu bisnismu level-up. Kita nggak cuma ngurusin visual biar kelihatan memikat, tapi juga mikirin gimana website itu bisa kerja maksimal buat ngebangun trust pelanggan, meroketkan reputasi brand, dan menghasilkan konversi.</p>
              <div className="absolute left-[15%] top-[25%] rotated_circle">
                <img src="/images/shape/about-dot.png" alt="Shape" />
              </div>
              <div className="absolute right-[15%] top-[60%] rotated_circle">
                <img src="/images/shape/dot-shape-circle.png" alt="Shape" />
              </div>
              <div className="mt-10">
                <Button asLinked={true} path={"#"}>Hire Me <FontAwesomeIcon icon={faAngleRight} fontSize={14}/></Button>
              </div>
            </SlideUp>
            {/* / END HERO DESIGN AREA */}

          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero