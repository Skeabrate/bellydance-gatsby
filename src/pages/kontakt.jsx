import React, { useRef, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useKontaktQuery } from 'hooks/useKontaktQuery';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeroImageContainer from 'components/HeroImageContainer/HeroImageContainer';
import Heading from 'components/Heading/Heading';
import Phone from 'assets/images/SVG/telefon.svg';
import Frame from 'components/Frame/Frame';
import ClipLoader from 'react-spinners/ClipLoader';
import { useForm } from '@formspree/react';
import { StyledSection, StyledForm, StyledFormResponse } from 'assets/styles/pages/kontakt.styles';

const Kontakt = () => {
  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_API || 'apiKey');

  const { placeholderImage } = useKontaktQuery();
  const formRef = useRef(null);

  useEffect(() => {
    if (!state.submitting && state.succeeded) formRef.current.reset();
  }, [state]);

  return (
    <MainWrapper>
      <HeroImageContainer placeholderImage={placeholderImage} />

      <ContentWrapper>
        <Heading label='Kontakt' isMain />

        <StyledSection>
          <article>
            <header>
              <h2>Zapraszam do kontaktu</h2>

              <p>
                Z przyjemnością odpowiem na wszystkie Państwa pytania dotyczące pokazu, czy nauki
                tańca.
              </p>

              <p>
                <Phone /> Telefon:{' '}
                <a href="tel:'502 505 119" rel='noopener noreferrer'>
                  502 505 119
                </a>
              </p>
            </header>

            <StyledForm onSubmit={handleSubmit} ref={formRef}>
              <input aria-label='Imię' id='imie' name='Imię' type='imie' placeholder='Imię' />
              <input
                aria-label='Adres e-mail'
                id='email'
                name='Email'
                type='email'
                placeholder='Adres e-mail'
                required
              />
              {state.errors.length ? (
                <StyledFormResponse>
                  {state.errors[0]?.message === 'should be an email'
                    ? 'Nieprawidłowy email.'
                    : null}
                </StyledFormResponse>
              ) : null}

              <textarea
                aria-label='Wiadomość'
                id='wiadomosc'
                name='Wiadomość'
                placeholder='Wiadomość'
                required
              ></textarea>

              {state.succeeded ? (
                <StyledFormResponse $succeeded>
                  {state.succeeded ? 'Dziękuję za Twoją wiadomość.' : null}
                </StyledFormResponse>
              ) : null}
              <button type='submit' disabled={state.submitting}>
                {state.submitting ? <ClipLoader size={20} /> : 'Wyślij'}
              </button>
            </StyledForm>
          </article>

          <Frame downRight>
            <StaticImage
              src='../assets/images/Kontakt/kontakt.jpg'
              alt='Agnieszka Świeczkowska - kontakt'
              placeholder='blurred'
              layout='fullWidth'
            />
          </Frame>
        </StyledSection>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Kontakt;
