import Hero from "../components/Hero/Hero";
import Program from "../components/Program/Program";
import TwitList from "../components/Twits/TwitList";
const twits = [
  {
    id: "1",
    text: '" Analarımız, bacılarımız, hayatımızın yarısı hatta çok daha fazla değerlerimizi ifade eden kadınlarımızın Kadın Hakları Gününü kutluyorum "',
    createdAt: "Mon Dec 5 00:00:00 +0300 2022",
  },
  {
    id: "2",
    text: '" En büyük ihtiyacımız dünya standartlarının ötesinde geleceği yöneten yeni eğitim anlayışı" yazalım olur mu "',
    createdAt: "Mon Oct 15 00:13:42 +0300 2022",
  },
  {
    id: "3",
    text: '" Gümrük vergilerini ortadan kaldıralım ve böylece halkların ittifakı ilan edilecek, dayanışmaları tanınacak ve eşitlikleri ilan edilecektir. "',
    createdAt: "Mon Sep 25 00:13:42 +0300 2022",
  },
  {
    id: "4",
    text: '" Bugün, Türkiye’nin karşı karşıya bulunduğu en önemli sorunlardan biri, kadın ve erkek arasındaki yasal ve toplumsal eşitliği sağlamaktır. Kadının zorla köşeye çekilmesinin aile yaşamını mahvettiği yerde hiçbir ilerleme mümkün değildir "',
    createdAt: "Mon Aug 19 00:13:42 +0300 2022",
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
