import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AboutContainer,
  AboutSection,
  Image,
  Me,
  Name,
} from "../styles/About.styled";
import developer from "../../images/developer.png";

const About = () => {
  const [age, setAge] = useState({
    year: 1999,
    age: "",
  });

  // const { state: food } = useLocation();

  // console.log(food);

  useEffect(() => {
    setAge((prevAge) => {
      return {
        ...prevAge,
        age: new Date().getFullYear() - prevAge.year,
      };
    });
  }, []);

  return (
    <AboutSection>
      <AboutContainer>
        <Image src={developer} />
        <Name>A.Talha Ercan</Name>
        <Me>
          Hi everyone. Thank you for visiting my website. I'm a full-stack web
          developer or I should say, I will be a full-stack web developer in the
          near future. I'm {age?.age} years old guy from Turkey. I'm currently
          studying Computer Science in Poland. I like any kind of activities
          done using computer. Do you want to contact with me? Please don't,
          unless you're making a job offer :{")"}.
        </Me>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
