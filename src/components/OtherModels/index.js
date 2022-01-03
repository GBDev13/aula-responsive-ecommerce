import { Container, ProductContainer } from "./styles";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';

export function ProductItem({ title, price, imgUrl }) {
  return (
    <ProductContainer>
      <strong><span>R$</span>{price}</strong>
      <img src={`/headsets/${imgUrl}.png`} alt={title}/>
      <h3>{title}</h3>
      <AiOutlineArrowDown />
    </ProductContainer>
  )
}

export function OtherModels() {
  return (
    <Container>
      <div>
        <div>
          <h2>Outros modelos</h2>
          <FiArrowRight className="arrow-right"/>
        </div>
        <p>Esses são os outros modelos<br /> incríveis da nossa marca ...</p>
        <FiArrowDown className="arrow-down"/>
      </div>
      <section>
        <ProductItem
          title="Headphone H4000"
          price="1500,95"
          imgUrl="H4000"
        />
        <ProductItem
          title="Headphone H3000"
          price="900,95"
          imgUrl="H3000"
        />
        <ProductItem
          title="Headphone H2000"
          price="589,95"
          imgUrl="H2000"
        />
      </section>
    </Container>
  )
}