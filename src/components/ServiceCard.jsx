

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 shadow-3xl w-full sm:min-w-[350px] sm:w-[350px] px-10 py-16 rounded-[20px] sm:flex-col"  >
        <div className="bg-coral-red w-11 h-11 rounded-full flex justify-center items-center">
        <img src={imgURL} className="rounded-lg" width={24} height={24}/>
        </div>
        <p className="mt-5 font-palanquin font-bold text-3xl leading-normal">{label}</p>
        <p className="mt-5 font-montserrat text-slate-gray break-words">{subtext}</p>
    </div>
  )
}

export default ServiceCard