import React from 'react';

const HeadComponent = ({ title, description }) => (
  <>
    <title>{title ? `Leyla Bellydance - ${title} ` : 'Leyla Bellydance'}</title>
    <meta
      name='description'
      content={
        description ||
        'Jestem dyplomowaną Instruktorką Tańca Sportowego o specjalności belly dance oraz dyplomowanym Instruktorem Sportu.'
      }
    />
    <meta
      name='keywords'
      content='zajęcia tańca orientalnego Włocławek, zajęcia tańca orientalnego Płock, zajęcia belly dance Włocławek, zajęcia belly dance Płock, pokaz tańca brzucha na imprezach okolicznościowych, taniec brzucha we Włocławku i Płocku, taniec orientalny we Włocławku i Płocku, pokaz tańca belly dance na jubileuszu, pokaz tańca belly dance na evencie firmowym, pokaz tańca belly dance dla jubilata, prezent dla jubilata, prezent dla solenizanta, pokaz tańca na sylwestra'
    />
    <meta
      name='google-site-verification'
      content='TQEVu74JexQyWfh8RunNmPCb97vDsZCNS3a9DaTs-0c'
    />
    <link
      rel='canonical'
      href='https://leyla-bellydance.pl/'
    />
  </>
);

export default HeadComponent;
