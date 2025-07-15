import React from "react";
import glbLogo from '../../assets/glb-logo.png';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-glbGold/20 to-glbWhite py-20 overflow-hidden w-full">
      <div className="w-full px-4 relative">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
          {/* Logo & Text Content */}
          <div className="w-full md:w-[45%] mb-10 md:mb-0 relative z-30 flex flex-col items-start gap-4">
            <img src={glbLogo} alt="GL Bajaj Logo" className="h-16 w-auto mb-2" />
            <h1 className="text-4xl md:text-5xl font-glbSerif font-bold text-glbBrown leading-tight mb-4">
              GL Bajaj Connect
            </h1>
            <p className="text-lg text-glbBlack/80 max-w-md font-glbSans">
              Premier platform for students to connect, collaborate, and grow. Experience excellence, innovation, and leadership—together.
            </p>
            <Button size="lg" className="mt-6" onClick={() => window.location.href='/register'}>
              Join Now
            </Button>
          </div>
          {/* Image Container */}
          <div className="w-full md:w-[55%] flex justify-center md:justify-end">
            <div className="relative md:mr-[-20px] lg:mr-0 md:ml-16">
              <div className="flex justify-center">
                <div className="relative flex space-x-[-30px]">
                  {/* First Image */}
                  <div className="h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[250px] lg:w-[250px] bg-glbGold rounded-full overflow-hidden border-4 border-glbWhite relative">
                    <img 
                      src="/firstperson.png" 
                      className="h-full w-full object-contain object-center scale-[1.3]" 
                      alt="Student 1" 
                    />  
                  </div>
                  {/* Second Image */}
                  <div className="h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[250px] lg:w-[250px] bg-glbBrown rounded-full overflow-hidden border-4 border-glbWhite relative z-10">
                    <img 
                      src="/secondperson.png" 
                      className="h-full w-full object-contain object-center scale-[1.3]" 
                      alt="Student 2" 
                    />  
                  </div>
                  {/* Third Image */}
                  <div className="h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[250px] lg:w-[250px] bg-glbMaroon rounded-full overflow-hidden border-4 border-glbWhite relative z-20">
                    <img 
                      src="/thirdperson.png" 
                      className="h-full w-full object-contain object-center scale-[1.3]" 
                      alt="Student 3" 
                    />  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
