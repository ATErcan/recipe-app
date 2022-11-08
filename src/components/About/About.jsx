import { AboutContainer, AboutSection, Image, Me, Name } from "./About.styled";

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <Image src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=826&t=st=1667916027~exp=1667916627~hmac=509178c587d747a3c0af4bbea45f679915d33b00a10d502634484271537b390d" />
        <Name>A.Talha Ercan</Name>
        <Me>
          Hi everyone. Thank you for visiting my website. I'm a full-stack web
          developer or I should say, I will be a full-stack web developer in the
          near future. I'm 23 years old guy from Turkey. I'm currently studying
          Computer Science in Poland. I like any kind of activities done using
          computer. Do you want to contact with me? Please don't, unless you're
          making a job offer :{")"}.
        </Me>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
