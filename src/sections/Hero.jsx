import  { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red text-xl font-montserrat">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> 
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block"> 
            Nike 
          </span>Shoes
        </h1>
        <p className="text-slate-gray leading-7 font-montserrat ">
          Discover stylish nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label ="Shop Now" iconUrl = {arrowRight} />
        <div className="flex gap-16 mt-20 justify-start items-start flex-wrap w-full" >
          {statistics.map((stat)=> (
           <div key={stat.label}>
             <p className="font-palanquin font-bold text-4xl">{stat.value}</p>
            <p className="leading-7 text-slate-gray font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe collection" width={610} height={540} className="object-contain relative z-10" />
        <div className="flex absolute -bottom-[5%] gap-4 sm:gap-6 sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe)=>(
            <div key={shoe}> 
           
            <ShoeCard imgUrl={shoe}
            changeBigShoeImage = {(shoe) => {
              setbigShoeImg(shoe);
            }}
            bigShoeImg = {bigShoeImg}
             />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
