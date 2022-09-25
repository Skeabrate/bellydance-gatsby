import React from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent = ({ title }) => {
  return (
    <Helmet
      title={title ? `Leyla Bellydance - ${title} ` : 'Leyla Bellydance'}
      meta={[
        {
          name: 'description',
          content:
            'Posiadam państwowe uprawnienia do wykonywania zawodu instruktora belly dance. Jestem dyplomowaną Instruktorką Tańca Sportowego o specjalności belly dance oraz dyplomowanym Instruktorem Sportu. Nauczam różnych odmian tańca orientalnego. Zwracam uwagę na szlifowanie techniki, grację i poprawę kondycji oraz sylwetki każdej z ćwiczących pań. Swoim barwnym tańcem staram się uświetnić ważne wydarzenia w Państwa życiu: jubileusze, rocznice, szampański Sylwester czy rodzinne festyny.',
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
    />
  );
};

export default HeadComponent;
