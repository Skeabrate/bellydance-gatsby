import * as React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useIndexQuery } from 'hooks/useIndexQuery';
import ContentWrapper from 'templates/ContentWrapper';
import PyramidScroll from 'components/PyramidScroll/PyramidScroll';
import Heading from 'components/Heading/Heading';
import Frame from 'components/Frame/Frame';
import SandSection from 'components/SandSection/SandSection';
import Gallery from 'components/Gallery/Gallery';
import SkipButton from 'components/SkipButton/SkipButton';
import { sandSectionData } from 'data/indexData';
import {
  StyledBgImage,
  StyledDarken,
  StyledBgTitle,
  StyledFirstSection,
  StyledFirstSectionImg,
  StyledSecondSectionImg,
  StyledThridArticle,
  StyledCompetitions,
} from 'assets/styles/pages/index.styles';

const Index = ({ data }) => {
  const { pluginImage } = useIndexQuery();

  return (
    <main>
      {/* HeroImage */}
      <StyledBgImage image={pluginImage}>
        <StyledDarken />
        <StyledBgTitle>
          <h1>Magiczny Świat Orientu</h1>
          <p>Zapraszam do baśni 1000 i jednej nocy</p>
          <StaticImage
            src='../assets/images/ornHero.png'
            aria-hidden='true'
            alt=''
            placeholder='blurred'
            width={200}
          />
        </StyledBgTitle>

        <PyramidScroll />
      </StyledBgImage>

      {/* Content */}
      <ContentWrapper>
        <section>
          <Heading
            label='O mnie'
            isMain
          />

          <StyledFirstSection>
            <article>
              <header>
                <h2>Uprawnienia państwowe</h2>
              </header>

              <p>Posiadam państwowe uprawnienia do wykonywania zawodu instruktora belly dance.</p>
            </article>
            <article>
              <header>
                <h2>Dyplomowany instruktor</h2>
              </header>

              <p>
                Jestem dyplomowaną Instruktorką Tańca Sportowego o specjalności belly dance oraz
                dyplomowanym Instruktorem Sportu.
              </p>
            </article>
            <article>
              <header>
                <h2>Przekazywanie wiedzy innym</h2>
              </header>

              <p>
                Nauczam różnych odmian tańca orientalnego. Zwracam uwagę na szlifowanie techniki,
                grację i poprawę kondycji oraz sylwetki każdej z ćwiczących pań.
              </p>
            </article>
            <article>
              <header>
                <h2>Orientalne show!</h2>
              </header>

              <p>
                Swoim barwnym tańcem staram się uświetnić ważne wydarzenia w Państwa życiu:
                jubileusze, rocznice, szampański Sylwester czy rodzinne festyny.
              </p>
            </article>
          </StyledFirstSection>

          <StyledFirstSectionImg>
            <Frame hideMobile>
              <StaticImage
                src='../assets/images/Homepage/homepage1.jpg'
                alt='Agnieszka Świeczkowska - legitymacja instruktora'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Frame>

            <Frame upRight>
              <StaticImage
                src='../assets/images/Homepage/homepage2.jpg'
                alt='Agnieszka Świeczkowska - legitymacja instruktora'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Frame>
          </StyledFirstSectionImg>
        </section>

        <Heading label={'Moja droga taneczna'} />

        <StyledCompetitions>
          <article>
            <header>
              <h2>Biorę udział w konkursach</h2>
            </header>

            <p>
              Nieustanny rozwój taneczny to uczestnictwo w warsztatach, nauka u najlepszych
              instruktorów tańca, a także konkursy tańca o rientalnego, w których oceniana jest
              technika dango stylu, choreografia, strój i charyzma tancerki.{' '}
              <strong>Pozwalają zaprezentować swój kunszt taneczny</strong> w kategoriach takich
              jak: solo classic, solo pop song, solo folk, solo tabla CD, solo tabla live, solo
              show, solo bollywood, solo tribal, tańce narodów świata.
            </p>

            <footer>
              <SkipButton
                label='Szkolę się u najlepszych'
                scrollId='#warsztaty'
              />
            </footer>
          </article>

          <StyledSecondSectionImg>
            <Frame hideMobile>
              <StaticImage
                src='../assets/images/Homepage/homepage3.jpg'
                alt='Agnieszka Świeczkowska - dyplom'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Frame>

            <StaticImage
              src='../assets/images/Homepage/homepage4.jpg'
              alt='Agnieszka Świeczkowska - dyplom'
              placeholder='blurred'
              layout='fullWidth'
            />
          </StyledSecondSectionImg>
        </StyledCompetitions>

        <section id='warsztaty'>
          <SandSection data={sandSectionData}>
            <Frame
              upRight
              hideMobile
            >
              <StaticImage
                src='../assets/images/Homepage/homepage5.jpg'
                alt='warsztaty'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Frame>
          </SandSection>
        </section>

        <section>
          <Heading label={'Wspieram'} />

          <StyledThridArticle>
            Dzielę sie swą pasją wspierając różne akcje i instytucje charytatywne: WOŚP,
            Eurointegrację oraz odwiedzam domy seniora, czy szkoły.
          </StyledThridArticle>

          <Gallery data={data?.allDatoCmsWspieram?.edges[0].node.gallery} />
        </section>
      </ContentWrapper>
    </main>
  );
};

export default Index;

export const query = graphql`
  query WspieramQuery {
    allDatoCmsWspieram {
      edges {
        node {
          gallery {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
