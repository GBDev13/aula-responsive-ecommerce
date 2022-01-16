import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 18, 17, 0.95);
  background: linear-gradient(34deg, rgba(25,88,24,0.95) 0%, rgba(17,18,17,0.95) 95%);
  
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  pointer-events: ${({ isVisible }) => isVisible ? 'auto' : 'none'};
  transform: ${({ isVisible }) => isVisible ? 'translateY(0px)' : 'translateY(50px)'};

  transition: .5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: ${({ isVisible }) => isVisible ? 'rotate(0deg)' : 'rotate(45deg)'};
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: ${({ isVisible }) => isVisible ? 'scale(1)' : 'scale(0.7)'};
    transition: .7s;
  }
`;