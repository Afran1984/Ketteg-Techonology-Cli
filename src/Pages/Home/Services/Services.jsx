import { useEffect } from "react";
import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const Services = () => {
  const [services, setServices] = useState([]);

  console.log(services);

  useEffect(() => {
      fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);

    return (
        <div className="p-6">
            <h2 className="text-3xl text-center">Our Services</h2>
              <div className="grid grid-cols-1 gap-3 xl:grid-cols-3 mt-3">
              {services.map((service) =>(
                <div key={service.id} className="card glass w-96">
                  <figure>
                    <img
                      src={service.img}
                      alt="car!" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{service.name}</h2>
                    <p>{service.details}</p>
                    <div className="card-actions justify-end">
                      <button className="btn rounded-3xl"><TiLocationArrow size={28}
                                                    color="#081d3b" /></button>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            
          
        </div>
    );
};

export default Services;