import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import GridSection from 'templates/GridSection';
import Heading from 'components/Heading/Heading';
import Frame from 'components/Frame/Frame';
import PyramidPointer from 'components/PyramidPointer/PyramidPointer';
import SandContent from 'components/SandContent/SandContent';
import { firstSectionData, secondSectionData, sandSectionData } from '../data/zajeciaData';

const Zajecia = () => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <Heading
          label='Taniec orientalny jest dla każdej z nas'
          isMain
        />

        <GridSection isBig>
          <article>
            <header>
              <h2>
                Bez względu na wiek, predyspozycje fizyczne, czy wcześniejszą aktywność ruchową,{' '}
                <span style={{ fontWeight: '400' }}>
                  każda z Pań może rozpocząć naukę tańca belly dance.
                </span>
              </h2>
            </header>

            <ul>
              {firstSectionData.map(({ id, val }) => (
                <li key={id}>
                  <PyramidPointer />
                  {val}
                </li>
              ))}
            </ul>
          </article>

          <Frame downRight>
            <StaticImage
              src='../assets/images/Zajecia/zajecia1.jpg'
              alt='Agnieszka Świeczkowska belly dance, taniec brzucha - zajęcia'
              placeholder='blurred'
              layout='fullWidth'
            />
          </Frame>
        </GridSection>

        <GridSection isBig>
          <article>
            <header>
              <h2>Dzięki zajęciom tańca brzucha możemy:</h2>
            </header>

            <ul>
              {secondSectionData.map(({ id, val }) => (
                <li key={id}>
                  <PyramidPointer />
                  {val}
                </li>
              ))}
            </ul>
          </article>

          <Frame>
            <StaticImage
              src='../assets/images/Zajecia/zajecia2.jpg'
              alt='Agnieszka Świeczkowska belly dance, taniec brzucha - zajęcia'
              placeholder='blurred'
              layout='fullWidth'
            />
          </Frame>
        </GridSection>

        <section>
          <SandContent data={sandSectionData}>
            <Frame
              upRight
              hideMobile
            >
              <StaticImage
                src='../assets/images/Zajecia/zajecia3.jpg'
                alt='Agnieszka Świeczkowska belly dance, taniec brzucha - zajęcia'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Frame>
          </SandContent>
        </section>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Zajecia;
