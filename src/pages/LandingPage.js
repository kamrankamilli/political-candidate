import Hero from "../components/Hero/Hero";
import Program from "../components/Program/Program";
import TwitList from "../components/Twits/TwitList";
const twits = [
  {
    id: "1",
    text: '" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, numquam. Aliquam dolor vitae architecto officiis aliquid veritatis doloremque, consequatur harum nostrum reprehenderit animi odit enim voluptates! Nisi exercitationem voluptates ullam? "',
    createdAt: "Mon Dec 18 00:13:42 +0300 2022",
  },
  {
    id: "2",
    text: '" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, numquam. Aliquam dolor vitae architecto officiis aliquid veritatis doloremque, consequatur harum nostrum reprehenderit animi odit enim voluptates! Nisi exercitationem voluptates ullam? "',
    createdAt: "Mon Dec 15 00:13:42 +0300 2022",
  },
  {
    id: "3",
    text: '" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, numquam. Aliquam dolor vitae architecto officiis aliquid veritatis doloremque, consequatur harum nostrum reprehenderit animi odit enim voluptates! Nisi exercitationem voluptates ullam? "',
    createdAt: "Mon Dec 15 00:13:42 +0300 2022",
  },
  {
    id: "4",
    text: '" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, numquam. Aliquam dolor vitae architecto officiis aliquid veritatis doloremque, consequatur harum nostrum reprehenderit animi odit enim voluptates! Nisi exercitationem voluptates ullam? "',
    createdAt: "Mon Dec 15 00:13:42 +0300 2022",
  },
];
const LandingPage = () => {
  return (
    <>
      <Hero></Hero>
      <Program></Program>
      <TwitList twits={twits}></TwitList>
    </>
  );
};
export default LandingPage;
