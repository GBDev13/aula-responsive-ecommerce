import styled from "styled-components";
import bgBanner from '../../assets/bannerBg.png';

export const Container = styled.div`
  background: #171A17 url(${bgBanner}) top right no-repeat;
  background-size: 50%;

  height: 640px;
  width: 100%;
  position: relative;

  > img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
  }

  > section {
    width: 100%;
    padding: 64px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;

export const HeroContent = styled.div`
  max-width: 755px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 28px;
    font-family: 'Chivo', sans-serif;
    color: #2FDA2B;
    display: block;
    margin-bottom: 24px;
  }

  > h1 {
    font-size: 48px;
    font-family: 'Chivo', sans-serif;
    display: block;
    margin-bottom: 24px;
  }

  > p {
    font-size: 18px;
    margin-bottom: 24px;
  }

  span {
    color: #2FDA2B;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 100px;
    gap: 24px;

    button {
      background: linear-gradient(90.95deg, #2FDA2B 11.11%, #3CA63A 85.65%);
      border-radius: 16px;
      color: #fff;
      padding: 13px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-weight: 600;
      font-size: 20px;
      height: 56px;
      width: 100%;

      &:last-child {
        background: none;
        border: 1px solid #2E332E;
      }
    }
  }
`;

export const HeadsetsContainer = styled.div`
  display: flex;
  gap: 130px;
  height: 520px;
  align-items: center;
  justify-content: center;

  > section {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 230px;
    }

    > div {
      display: flex;
      gap: 16px;
      margin-top: 60px;

      button {
        width: 40px;
        height: 40px;
        border-radius: 16px;
        
        &.green {
          background: #33BF30;
          border: 2px solid #33BF30;
        }
        
        &.gray {
          background: #404143;
          border: 2px solid #4E564E;
        }
        
        &.white {
          background: #ffff;
          border: 2px solid #ffff;
        }
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    > svg {
      color: #5C665C;
      width: 24px;
      height: 24px;
    }
  }
`;

export const HeadsetItemContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  border: 2px solid ${({ isActive }) => isActive ? '#2FDA2B' : '#2E332E'};
  background: #2E332E;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 50px;
    height: 50px;
    object-fit: contain
  }
`;

export const SocialContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: auto;

  svg {
    cursor: pointer;
    transition: .5s;

    &:hover {
      color: #2FDA2B;
    }
  }
`;