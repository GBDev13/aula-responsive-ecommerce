import { Container, HeadsetsContainer, HeadsetItemContainer, SocialContainer, HeroContent } from "./styles";
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import {
  FaShoppingBag,
  FaRegPlayCircle,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa';

import headImg1 from '../../assets/headset/head1.png';
import { useEffect, useState } from "react";

const headsetList = [
  {
    img: 'head2.png',
    isActive: true
  },
  {
    img: 'head3.png'
  },
  {
    img: 'head4.png'
  },
  {
    img: 'head5.png'
  },
  {
    img: 'head6.png'
  }
];

function HeadsetItem({ data }) {
  return (
    <HeadsetItemContainer isActive={data.isActive}>
      <img alt="headset" src={`/headsets/${data.img}`} />
    </HeadsetItemContainer>
  )
}

function SocialLinks() {
  return (
    <SocialContainer>
      <FaYoutube />
      <FaTwitter />
      <FaInstagram />
      <FaFacebookF />
    </SocialContainer>
  )
}

export function HeroBanner() {
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

  const screenWidth = useWindowDimensions();

  return (
    <Container>
      <section>
        <HeroContent>
          <strong>Headphone H4000XS</strong>
          <h1>Sinta o universo, <span>ouça o universo</span> sem sair de <span>casa</span></h1>
          <p>O <span>Headphone H300</span> apresenta o sistema de driver de câmara dupla que reduz a distorção e oferece som mais claro bem como o conforto exclusivo da <span>Listen Universe</span>, proporcionado pelos fones de ouvido acolchoados que foram aprimorados com couro sintético extra ventilado.</p>
          <div>
            <button>
              <FaShoppingBag />
              Compre já
            </button>
            <button>
              <FaRegPlayCircle />
              Saiba mais
            </button>
          </div>

          { screenWidth > 1000 && <SocialLinks />}
        </HeroContent>
        <HeadsetsContainer>
          <section>
            <img src={headImg1} alt="Headset 1"/>
            <div>
              <button className="green"/>
              <button className="gray"/>
              <button className="white"/>
            </div>
          </section>
          <div>
            <RiArrowUpSLine />
            {headsetList.map((item, index) => (
              <HeadsetItem key={index} data={item} />
            ))}
            <RiArrowDownSLine />
          </div>

        </HeadsetsContainer>
        { screenWidth < 1000 && <SocialLinks />}
      </section>
    </Container>
  )
}