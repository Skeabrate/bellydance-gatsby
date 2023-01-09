import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import VideoUrl from 'assets/images/Pokazy/Videos/agunia.mp4';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import GridSection from 'templates/GridSection';
import Heading from 'components/Heading/Heading';
import SkipButton from 'components/SkipButton/SkipButton';
import Frame from 'components/Frame/Frame';
import PyramidPointer from 'components/PyramidPointer/PyramidPointer';
import Gallery from 'components/Gallery/Gallery';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import Video from 'components/Video/Video';

const Pokazy = ({ data }) => {
  return (
    <>
      <HeadComponent title='pokazy' />

      <MainWrapper>
        <ContentWrapper>
          <Heading
            label='Moje Pokazy'
            isMain
          />

          <GridSection>
            <article>
              <header>
                <h2>Magia tańca orientalnego podczas Państwa uroczystości</h2>
              </header>

              <p>
                W ten egzotyczny świat wprowadzi Cię tancerka Leyla, która może zatańczyć na Państwa
                weselu, imprezie okolicznościowej, czy ofiarować w imieniu Państwa, taniec dla gości
                imprezy.
              </p>

              <footer>
                <SkipButton
                  label='Program pokazów'
                  scrollId='#program-pokazow'
                />
              </footer>
            </article>

            <Frame downRight>
              <StaticImage
                src='../assets/images/Pokazy/img11.jpg'
                alt='Agnieszka Świeczkowska belly dance, taniec brzucha - pokazy'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Frame>
          </GridSection>

          <GridSection>
            <article id='program-pokazow'>
              <header>
                <h2>Program i repertuar</h2>
              </header>

              <p>
                Program i charakter pokazu może być dostosowany do rodzaju imprezy okolicznościowej
                oraz oczekiwań Klienta. W moim repertuarze znajdują się:
              </p>

              <ul>
                <li>
                  <PyramidPointer />
                  <strong>nowoczesny pop</strong>
                </li>
                <li>
                  <PyramidPointer />
                  <span>
                    <strong>pokazy z gatunku fantasy belly dance,</strong> czyli taneczne show z
                    rekwizytami: skrzydłami Izydy, woalem, wachlarzami
                  </span>
                </li>
                <li>
                  <PyramidPointer />
                  <strong>zmysłowa klasyka</strong>
                </li>
                <li>
                  <PyramidPointer />
                  <strong>radosny folklor do wesołej muzyki</strong>
                </li>
              </ul>
            </article>

            <Frame isFlex>
              <div style={{ zIndex: 1 }}>
                <Video
                  source={VideoUrl}
                  thumbnailUrl={
                    data.placeholderImage.childImageSharp.gatsbyImageData.images.fallback.src
                  }
                />
              </div>
            </Frame>
          </GridSection>

          <GridSection noPadding>
            <article>
              <header>
                <h2>Na zakończenie, wspólna zabawa</h2>
              </header>

              <p>
                Na zakończenie pokazu proponujemy wspólną zabawę z Gośćmi przy dźwiękach znanych
                piosenek Shakiry, Tarkana, czy Arasha. Nauka podstawowych ruchów belly dance
                rozweseli nawet najmniej roztańczonych Gości!
              </p>

              <footer>
                <SkipButton
                  label='Galeria zdjęć'
                  scrollId='#galeria'
                />
              </footer>
            </article>

            <Frame downRight>
              <StaticImage
                src='../assets/images/Pokazy/img10.jpg'
                alt='Agnieszka Świeczkowska belly dance, taniec brzucha - pokazy'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Frame>
          </GridSection>

          <div id='galeria'>
            <Heading label={data?.allContentfulGalerieZdjec?.edges[0].node.title} />

            <Gallery data={data?.allContentfulGalerieZdjec?.edges[0].node.gallery} />
          </div>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
};

export default Pokazy;

export const query = graphql`
  query PokazyQuery {
    allContentfulGalerieZdjec(filter: { title: { eq: "Pokazy" } }) {
      edges {
        node {
          id
          title
          gallery {
            id
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            description
            url
          }
        }
      }
    }

    placeholderImage: file(relativePath: { eq: "Pokazy/img9.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
    }
  }
`;
