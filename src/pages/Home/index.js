import { Header } from "../../components/Header";
import { HeroBanner } from "../../components/HeroBanner";
import { OtherModels } from "../../components/OtherModels";
import { HomeContainer } from "../../styles/pages/HomeStyles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HeroBanner />
      <OtherModels />
    </HomeContainer>
  )
}