import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex flex-wrap gap-10 justify-center">
      {services.map((service)=>(
      <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services