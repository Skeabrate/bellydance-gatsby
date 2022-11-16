import React from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent = ({ title, description }) => {
  return (
    <Helmet
      title={title ? `Leyla Bellydance - ${title} ` : 'Leyla Bellydance'}
      meta={[
        {
          name: 'description',
          content:
            description ||
            'Jestem dyplomowaną Instruktorką Tańca Sportowego o specjalności belly dance oraz dyplomowanym Instruktorem Sportu.',
        },
        {
          name: 'keywords',
          content:
            'pokaz tańca belly dance na jubileuszu, pokaz tańca belly dance na evencie firmowym, pokaz tańca belly dance dla jubilata, prezent dla jubilata, prezent dla solenizanta, pokaz tańca na sylwestra, zajęcia tańca orientalnego  we Włocławku i Płocku, zajęcia belly dance we Włocławku i Płocku, pokaz tańca brzucha na imprezach okolicznościowych, taniec brzucha we Włocławku i Płocku, taniec orientalny we Włocławku i Płocku',
        },
        {
          name: 'google-site-verification',
          content: 'TQEVu74JexQyWfh8RunNmPCb97vDsZCNS3a9DaTs-0c',
        },
      ]}
      defer={false}
    >
      <link
        rel='canonical'
        href='https://leyla-bellydance.pl/'
      />
    </Helmet>
  );
};

export default HeadComponent;
