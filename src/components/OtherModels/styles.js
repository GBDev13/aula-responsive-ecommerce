import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 24px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > section {
    display: flex;
    align-items: center;
    gap: 150px;
  }

  > div {
    > div {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 16px;

      h2 {
        font-size: 27px;
        font-family: 'Chivo', sans-serif;
      }
    }

    p {
      font-size: 18px;
    }

    .arrow-down {
      display: none;
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  strong {
    display: block;
    background: #3CA63A;
    font-weight: 600;
    padding: 3px 16px;
    border-radius: 16px;

    span {
      margin-right: 3px;
      font-weight: 400;
      font-size: 14px;
    }
  }

  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
  }

  h3 {
    font-weight: 600;
    font-size: 24px;
  }
`;