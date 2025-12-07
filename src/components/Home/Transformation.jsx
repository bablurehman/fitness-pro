import { transformations } from "../../assets/assets";

const Transformation = () => {
  return (
    <section
      id="transformations"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12 text-center">
          <h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Transformation <span className="text-green-500">Gallery</span>
          </h3>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Real people. Real results. Explore our clients’ inspiring fitness
            transformations achieved through consistency, discipline, and expert
            coaching.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {transformations.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transform transition-transform ease-in-out duration-500 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 150} // smooth stagger
              data-aos-duration="1200"
            >
              <img
                src={img}
                alt={`Fitness transformation ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover aspect-[3/4] group-hover:scale-110 transition-transform duration-600 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-center items-center text-white">
                <p className="text-sm md:text-base font-semibold tracking-wide">
                  Transformation
                </p>
                <span className="block mt-1 text-xs md:text-sm text-green-400">
                  #{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformation;
