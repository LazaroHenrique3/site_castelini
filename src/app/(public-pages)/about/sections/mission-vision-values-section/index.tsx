'use client'
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import mission from '../../../../../../public/images/others/mission.jpg';
import vision from '../../../../../../public/images/others/vision.jpg';
import purpose from '../../../../../../public/images/others/purpose.jpg';
import values from '../../../../../../public/images/others/values.jpg'

import hanger from '../../../../../../public/images/others/hanger.png';

export const MissionVisionValuesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="bg-slate-200 py-20 mb-36">
      <div className="w-[90%] lg:w-[80%] m-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-16 mb-16">
          <div data-aos="fade-right" className="flex-1 w-full">
            <Image
              src={mission}
              alt="Nossa missão"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>

          <div data-aos="fade-left" className="flex flex-col">
            <div className="flex flex-col">
              <Image src={hanger} alt="Logo cabide" className="w-24" />
              <h3 className="text-4xl md:text-6xl font-bold text-primary-red mb-4 uppercase">
                Nossa <span className="block ml-6 text-primary-gray">Missão</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-16 mb-16">
          <div data-aos="fade-right" className="flex flex-col">
            <div className="flex flex-col">
              <Image src={hanger} alt="Logo cabide" className="w-24" />
              <h3 className="text-4xl md:text-6xl font-bold text-primary-red mb-4 uppercase">
                Nosso <span className="block ml-6 text-primary-gray">Propósito</span>
              </h3>
            </div>
          </div>

          <div data-aos="fade-left" className="flex-1 w-full">
            <Image
              src={purpose}
              alt="Nosso propósito"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-16 mb-16">
          <div data-aos="fade-right" className="flex-1 w-full">
            <Image
              src={values}
              alt="Nossa missão"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>

          <div data-aos="fade-left" className="flex flex-col">
            <div className="flex flex-col">
              <Image src={hanger} alt="Logo cabide" className="w-24" />
              <h3 className="text-4xl md:text-6xl font-bold text-primary-red mb-4 uppercase">
                Nossos <span className="block ml-6 text-primary-gray">Valores</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-16">
          <div data-aos="fade-right" className="flex flex-col">
            <div className="flex flex-col">
              <Image src={hanger} alt="Logo cabide" className="w-24" />
              <h3 className="text-4xl md:text-6xl font-bold text-primary-red mb-4 uppercase">
                Nossa <span className="block ml-6 text-primary-gray">Visão</span>
              </h3>
            </div>
          </div>

          <div data-aos="fade-left" className="flex-1 w-full">
            <Image
              src={vision}
              alt="Nosso propósito"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

