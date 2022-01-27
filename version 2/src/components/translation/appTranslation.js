import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18next from 'i18next';



i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:["en","ru",'am'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage',  'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react :{ useSuspense: false },
  
  });


const languages = [
  {
    code:'ru',
    name: "Русский",
    country_code: "ru"

  },
  {
    code:'en',
    name: "English",
    country_code: "gb"

  },
  {
    code:'am',
    name: "Հայերեն",
    country_code: "am"
  }
]

function Translate() {



  return (

    <>

<div className='languages'>
{languages.map(({code,name, country_code}) => (

  <li key={country_code}>
    <p
    className='dropdown-item'
    onClick={() => i18next.changeLanguage(code)}>
    {name}
    </p>
  
  </li>
))}
         </div>

    </>
   
  ) ;
}


export default Translate;