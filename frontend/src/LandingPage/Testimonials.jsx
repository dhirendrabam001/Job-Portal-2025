import { TestimonialsList } from "../DataStore/Data";
import RatingStar from "../DataStore/Rating";
const Testimonials = () => {
  const star = [];

  return (
    <div className="testimonials-main py-4 mt-4">
      <div className="container">
        <div className="mb-2 text-center">
          <h2 className="text-capitalize text-white fw-bold fs-1">
            What user says about us
          </h2>
          <p>
            Your success is our mission. Here’s what our users have to say about
            their journey with us
          </p>
        </div>
        <div className="row align-items-center justify-content-center">
          {TestimonialsList.map((items, index) => {
            return (
              <div className="col-12 col-md-3 col-lg-3" key={index}>
                <div className="testimonials">
                  <div className="testmonial-content d-flex align-items-center gap-3">
                    <div className="testimonial-avtar">
                      <img src={items.img} alt="avtar" />
                    </div>
                    <div className="testimonal-info">
                      <h2>{items.name}</h2>
                      <RatingStar ratings={items.rating} />
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>{items.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
