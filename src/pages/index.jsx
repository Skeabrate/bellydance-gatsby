import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { StaticImage } from 'gatsby-plugin-image';
import * as Styled from 'assets/styles/pages/index.styles';
import ContentWrapper from 'templates/ContentWrapper';
import PyramidScroll from 'components/PyramidScroll/PyramidScroll';
import Heading from 'components/Heading/Heading';
import Frame from 'components/Frame/Frame';
import SandContent from 'components/SandContent/SandContent';
import Gallery from 'components/Gallery/Gallery';
import SkipButton from 'components/SkipButton/SkipButton';
import { Helmet } from 'react-helmet';

const Index = ({ data }) => {
  return (
    <>
      <Helmet
        title='Leyla Bellydance'
        meta={[
          {
            name: 'description',
            content:
              'Posiadam państwowe uprawnienia do wykonywania zawodu instruktora belly dance. Jestem dyplomowaną Instruktorką Tańca Sportowego o specjalności belly dance oraz dyplomowanym Instruktorem Sportu. Nauczam różnych odmian tańca orientalnego. Zwracam uwagę na szlifowanie techniki, grację i poprawę kondycji oraz sylwetki każdej z ćwiczących pań. Swoim barwnym tańcem staram się uświetnić ważne wydarzenia w Państwa życiu: jubileusze, rocznice, szampański Sylwester czy rodzinne festyny.',
          },
        ]}
        defer={false}
      />

      <main>
        {/* HeroImage */}
        <Styled.HeroImage image={getImage(data.placeholderImage)}>
          <Styled.DarkerBackgroundImage />
          <Styled.HeroTitle>
            <h1>Magiczny Świat Orientu</h1>
            <p>Zapraszam do baśni 1000 i jednej nocy</p>
            <StaticImage
              src='../assets/images/ornHero.png'
              aria-hidden='true'
              alt=''
              placeholder='blurred'
              width={200}
            />
          </Styled.HeroTitle>

          <PyramidScroll />
        </Styled.HeroImage>

        {/* Content */}
        <ContentWrapper>
          <section>
            <Heading
              label='O mnie'
              isMain
            />

            <Styled.AboutMe>
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
            </Styled.AboutMe>

            <Styled.AboutMeImages>
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
            </Styled.AboutMeImages>
          </section>

          <Heading label={'Moja droga taneczna'} />

          <Styled.Competitions>
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

            <Styled.CompetitionsImages>
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
            </Styled.CompetitionsImages>
          </Styled.Competitions>

          <section id='warsztaty'>
            <SandContent
              data={[
                {
                  id: 0,
                  title: 'Lifelong learning w tańcu ',
                  desc: 'W ślad za Konfucjuszem czy Sokratesem, którzy postulowali ideę stałego uczenia się i rozwoju również i ja nieustannie rozwijam się w tańcu. Ogromną przestrzenią do zdobywania wiedzy o tańcu orientalnym oraz szlifowania umiejętności są dla mnie warsztaty krajowe, zagraniczne, festiwale taneczne, podczas których mam możliwość uczenia się od wybitnych nauczycieli i żyjących legend tańca orientalnego. Nieustannie korzystam również z platform online, prowadzonych przez akademie taneczne i topowych instruktorów z całego świata. Lubię zgłębiać historię raqs sharki, jednocześnie śledząc najnowsze trendy i nieustanną ewolucję tego niezwykle barwnego tańca.',
                },
                {
                  id: 1,
                  title: 'Miałam zaszczyt uczyć się u takich nauczycieli jak:',
                  desc: 'Sadie, Lubna Emam, Kazafy, Eman Zaki, Jasirah, Zaina, Khaled Mahmoud, Tito, Randa Kamel, Camelia, Hosseny El Masry, Beata & Horacio Cifuentes, Bozenka, Mercedes Nieto, Margarita Darina, Alex Delora, Dariya Mitskevych, Julia Farid, Leandro Ferreyra, Wael Mansour, Sahar Samara, Azaad Khan.',
                },
              ]}
            >
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
            </SandContent>
          </section>

          <section>
            <Heading label={'Wspieram'} />

            <Styled.Support>
              Dzielę sie swą pasją wspierając różne akcje i instytucje charytatywne: WOŚP,
              Eurointegrację oraz odwiedzam domy seniora, czy szkoły.
            </Styled.Support>

            <Gallery data={data?.allDatoCmsWspieram?.edges[0].node.gallery} />
          </section>
        </ContentWrapper>
      </main>
    </>
  );
};

export default Index;

export const query = graphql`
  query IndexQuery {
    allDatoCmsWspieram {
      edges {
        node {
          gallery {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            video {
              mp4Url
            }
          }
        }
      }
    }

    placeholderImage: file(relativePath: { eq: "Homepage/homepageBaner.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
    }
  }
`;
