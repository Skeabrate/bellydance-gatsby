import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import GridSection from 'templates/GridSection';
import Heading from 'components/Heading/Heading';
import Frame from 'components/Frame/Frame';
import PyramidPointer from 'components/PyramidPointer/PyramidPointer';
import SandContent from 'components/SandContent/SandContent';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import styled from 'styled-components';

const StyledSpan = styled.span`
  font-weight: 400;
`;

const Zajecia = () => {
  return (
    <>
      <HeadComponent title='zajęcia' />

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
                  <StyledSpan>każda z Pań może rozpocząć naukę tańca belly dance.</StyledSpan>
                </h2>
              </header>

              <ul>
                <li>
                  <PyramidPointer />
                  Prowadząc zajęcia zwracam uwagę na szlifowanie techniki, pracuję nad gracją,
                  zmysłowością i poprawą kondycji oraz rzeźby każdej z ćwiczących pań.
                </li>

                <li>
                  <PyramidPointer />
                  Uczę ich różnych styli tańca orientalnego, poszerzając ich wiedzę teoretyczną i
                  praktyczną w zakresie tańca arabskiego.
                </li>

                <li>
                  <PyramidPointer />
                  Do każdej swojej tancerki staram się podchodzić w sposób zindywidualizowany,
                  pomagając dostrzec swe predyspozycje i rozwijać możliwości.
                </li>

                <li>
                  <PyramidPointer />
                  Czas poświecony na taniec brzucha przynosi nam wymierne korzyści zarówno dla
                  ciała, psychiki i naszej duszy.
                </li>
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
                <li>
                  <PyramidPointer />
                  zniwelować ból pleców,
                </li>

                <li>
                  <PyramidPointer />
                  poprawić ogólną kondycję,
                </li>

                <li>
                  <PyramidPointer />
                  wzmocnić mięśnie brzucha, miednicy, pleców, ramion i nóg. A im silniejsze mięśnie
                  brzucha, to zdrowszy i bardziej odciążony kręgosłup!
                </li>

                <li>
                  <PyramidPointer />
                  usuwać wszelkie niedogodności związane z siedzącym trybem życia,
                </li>

                <li>
                  <PyramidPointer />
                  dzięki technice opartej na izolacji pogłębiać świadomość ciała i polepszać
                  koordynację ruchową,
                </li>

                <li>
                  <PyramidPointer />
                  pracując systematycznie nad zwiększeniem zakresu ruchu w stawach, siłą mięśni i
                  ich rozciąganiem, utrzymaniem ładnej, wyprostowanej sylwetki nabierać gracji,
                  elegancji w codziennym ruchu,
                </li>

                <li>
                  <PyramidPointer />w sposób przyjemny pozbyć się zbędnych kilogramów - tańcząc w
                  takt orientalnej muzyki spalamy ok. 500kc/h !
                </li>
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
            <SandContent
              data={[
                {
                  id: 0,
                  title:
                    'Dzieki wymaganej systematyczności w treningach taniec orientalny uczy nas cierpliwości, wytrwałości i szacunku dla swojego ciała.',
                  desc: 'Jednocześnie jest lekcją pokory wobec nieznanej nam wiedzy, wymagającą naszego zaangażowania i pracy, jeśli chcemy rozwijać się w tym wyjątkowym tańcu. Poprzez pracę z emocjami i wysiłek fizyczny pozwala uwolnić się od napięć i skupić się na samej sobie - tym, co czuje nasze ciało - na własnych odczuciach, emocjach.',
                },
                {
                  id: 1,
                  title:
                    'Taniec w gronie innych kobiet doskonale wpływa na nasz nastrój i samopoczucie,',
                  desc: 'pozwala rozwijać swą pasję , mieć satysfakcję z osobistych postępów, a nawet dzielić się nią podczas wspólnych występów na scenie, czy tanecznym parkiecie.',
                },
              ]}
            >
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
    </>
  );
};

export default Zajecia;
