import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div class="front">
      <div class="front-text">
        <div class="front-heading-1"></div>
        <div class="front-heading-2">Mental Wellness</div>
        <div class="front-subheading">
          Our nonprofit illuminates paths to mental wellness for all,
          prioritizing compassion and accessibility in every endeavor.
        </div>
        <div class="front-button">
          <a href="#who-we-are">
            <button>Our Mission</button>
          </a>
        </div>
      </div>
      <div class="front-images">
        <div class="image-container">
          <img src="/images/person10-1.webp" alt="" />
        </div>
        <div class="image-container img11">
          <img src="/images/person11.webp" alt="" />
        </div>
        <div class="image-container img13">
          <img src="/images/person13.webp" alt="" />
        </div>
        <div class="image-container img12">
          <img src="/images/person12.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
