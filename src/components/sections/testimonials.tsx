import { testimonials } from "@/constants";
import TitleHeader from "../title-header";
import GlowCard from "../glow-card";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="grid-3-cols mt-12!">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-full">
              <GlowCard card={testimonial} index={index}>
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={testimonial.imgPath}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-bold">{testimonial.name}</p>

                    <p className="text-white-50">{testimonial.mentions}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
