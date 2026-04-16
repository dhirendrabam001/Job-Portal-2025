// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LatestJobs from "../Pages/LatestJobs";
import { useSelector } from "react-redux";

// const allJobs = [1, 2, 3, 4];

const JobCategory = () => {
  const { allJobs } = useSelector((store) => store.jobs);
  console.log(allJobs);

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

        {allJobs.length === 0 ? (
          <span className="text-white fw-bold text-center">
            Latest Jobs Does Not Found
          </span>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
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
            {allJobs.map((job, index) => (
              <SwiperSlide key={index}>
                <LatestJobs key={job._id} job={job} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default JobCategory;
