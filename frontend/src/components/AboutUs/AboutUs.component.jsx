import CircleWithImage from "./TopSection.components";
import OfficerCardList from "./OfficerCards/OfficerCardList.components";

let AboutUs = () => {
  return (
    <div>
      <CircleWithImage
        imageUrl="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg"
        text="Founder"
      />
      <OfficerCardList />
    </div>
  );
};

export default AboutUs;
