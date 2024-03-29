import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

/* HeroImage */
export const HeroImage = styled(BgImage)`
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  row-gap: 6rem;

  ${({ theme }) => theme.mq.desktop} {
    min-height: 800px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    row-gap: 8rem;
  }
`;

export const HeroTitle = styled.div`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  h1 {
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
    font-weight: 400;
    font-size: 3.8rem;
    text-shadow: 5px 5px 10px hsla(0, 0%, 0%, 0.5);

    ${({ theme }) => theme.mq.desktop} {
      font-size: 4.2rem;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
      font-size: 5.4rem;
    }
  }

  p {
    margin: 1rem 0 1.5rem;
    text-shadow: 5px 5px 10px hsla(0, 0%, 0%, 0.5);
  }
`;

export const DarkerBackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.1;
`;

/* Content */
export const AboutMe = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: ${({ theme }) => theme.spacing.columnGap};
  row-gap: 3rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
    row-gap: 5rem;
    margin-bottom: 8rem;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const AboutMeImages = styled.div`
  display: grid;
  column-gap: ${({ theme }) => theme.spacing.columnGap};
  row-gap: 1rem;

  ${({ theme }) => theme.mq.mobile} {
    row-gap: 3rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Competitions = styled.section`
  display: grid;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing.columnGap};
  row-gap: 3rem;
  padding-bottom: 10rem;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: ${({ $isBig }) => ($isBig ? '1fr' : '1fr 1fr')};
    padding-bottom: 16rem;

    article {
      grid-column: ${({ $isBig }) => ($isBig ? '1' : '2')};
      grid-row: 1;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20rem;

    article {
      grid-column: 2;
    }
  }
`;

export const CompetitionsImages = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;

  ${({ theme }) => theme.mq.mobile} {
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
  }
`;

export const Support = styled.article`
  margin-bottom: 4rem;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 6rem;
  }
`;
