import React from "react";
import { CategoryList } from "../DataStore/Data";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const JobCategory = () => {
  return (
    <div className="job-category py-4 mt-3 mt-md-0">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-1 text-white">
            Browse <span>Jobs</span> Category
          </h2>
          <p>
            Explore a wide range of job categories from IT and engineering to
            marketing, finance, healthcare, and more.
            <span className="break">
              <br />
            </span>
            Find the right role that matches your skills, interests, and goals,
            and take the next step toward building your future.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]} // ✅ add modules here
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {CategoryList.map((item, key) => (
            <SwiperSlide key={key}>
              <div className="card mx-2 text-center shadow mt-4">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="text-info">
                    <small className="text-muted">{item.jobs} Jobs</small>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default JobCategory;
