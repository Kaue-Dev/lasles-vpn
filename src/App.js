//Styles
import './App.css';
//Images
import image1 from "./assets/image1.svg"
import map from "./assets/map.svg"
import marcas from "./assets/marcas.svg"
import perfil1 from "./assets/perfil1.svg"
import perfil2 from "./assets/perfil2.svg"
import perfil3 from "./assets/perfil3.svg"
import twitter from "./assets/Twitter.svg"
//Components
import Header from './components/header/Header';
import IlustrationImage from './components/ilustrationImage/IlustrationImage';
import RetangularButton from './components/retangularButton/RetangularButton';
import DescriptionText from './components/descriptionText/DescriptionText';
import Informartions from './components/Informations/Informartions';
import Title from "./components/title/Title"
import FeaturesSection from './components/featuresSection/FeaturesSection';
import PlansCard from './components/plansCard/PlansCard';
import ComentaryBlock from './components/comentaryBlock/ComentaryBlock';
import Icon from './components/header/headerIcon/Icon';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className='descriptionDiv'>
        <div className='textsDiv'>
          <Title 
            textContent="Want anything to be easy with LaslesVPN." 
            fontSize='3.12rem' 
            fontWeight='500'
            width='34.3rem'
            margin="true"
          />
          <DescriptionText width='34.3rem' fontSize="1rem" textContent="Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us."/>
          <RetangularButton textContent="Get Started" hover="true"/>
        </div>
        <IlustrationImage src={image1} width="600px" height="380px" />
      </div>

      <div className='informationsDiv'>
        <Informartions />
      </div>

      <div className='featuresSectionDiv'>
        <FeaturesSection />
      </div>

      <div className='plansDiv'>
        <Title 
          textContent="Choose Your Plan"
          fontSize="35px" fontWeight='500'
        />
        <div style={{marginTop: "20px"}}>
          <DescriptionText 
            textContent="Let's choose the package that is best for you and explore it happily and cheerfully."
            fontSize="16px" fontWeight="400"
          />
        </div>
        <div className='plansCardsDiv'>
          <PlansCard titleText="Free Plan" priceText="Free"/>
          <PlansCard titleText="Standard Plan" standart="true" priceText="$9"/>
          <PlansCard titleText="Premium Plan" premium="true" priceText="$12"/>
        </div>
      </div>

      <div className='mapDiv'>
        <div className='mapTextsDiv'>
          <Title 
            textContent="Huge Global Network of Fast VPN"
            fontSize="35px" fontWeight="500" width='380px'
          />
          <DescriptionText 
            textContent="See LaslesVPN everywhere to make it easier for you when you move locations." 
            fontSize="16px" fontWeight="400" width='550px'
          />
        </div>
        <img src={map} width="1060px" height="530px" alt='Map'/>
        <div style={{marginTop: "30px"}}>
          <img src={marcas} width="1130px" height="210px" alt='Marcas'/>
        </div>
      </div>

      <div className='comentsDiv'>
        <div className='comentsDivTexts'>
          <Title 
            fontSize="35px" fontWeight="500"
            textContent="Trusted by Thousands of Happy Customer"
            width='450px'
          />
          <DescriptionText
            fontSize="16px" fontWeight="400" 
            textContent="These are the stories of our customers who have joined us with great pleasure when using this crazy feature."
          />
        </div>
        <div className='comentsDivComponents'>
          <ComentaryBlock 
            outline = "true"
            userName="Viezh Robert"
            userLocation="Warsaw, Poland"
            userComentary="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            imgSrc={perfil1}
          />
          <ComentaryBlock 
            userName="Yessica Christy"
            userLocation="Shanxi, China"
            userComentary="“I like it because I like to travel far and still can connect with high speed.”"
            imgSrc={perfil2}
          />
          <ComentaryBlock 
            userName="Kim Young Jou"
            userLocation="Seoul, South Korea"
            userComentary="“This is very unusual for my business that currently requires a virtual private network that has high security.”"
            imgSrc={perfil3}
          />
        </div>
      </div>

      <div className='subscribeNowFatherDiv'>
        <div className='subscribeNowDiv'>
          <div className='subscribeNowTextsDiv'>
            <Title 
              textContent="Subscribe Now for Get Special Features!"
              fontSize="35px" fontWeight="500"
              width='360px'
            />
            <DescriptionText 
              textContent="Let's subscribe with us and find the fun."
              fontSize="16px" fontWeight="400"
            />
          </div>
          <div className='subscribeNowButtonDiv'>
            <RetangularButton textContent="Subscribe Now" hover="true" />
          </div>
        </div>
      </div>

      <div className='footerDiv'>
        <div className='firstFooterDiv'>
          <div className='firstFooterDivTexts'>
            <Icon />
            <DescriptionText 
              textContent="LaslesVPN is a private virtual network that has unique features and has high security."
              fontWeight="500" fontSize="16px" width='340px'
            />
          </div>
          <div className='firstFooterDivIcons'>
            <img src={twitter} alt='twitter'/>
            <img src={twitter} alt='twitter'/>
            <img src={twitter} alt='twitter'/>
          </div>
          <DescriptionText 
            textContent="©2020LaslesVPN"
            fontWeight="400" fontSize="16px"
          />
        </div>

        <div className='secondFooterDiv'>
          <Title 
            textContent="Product" fontSize="18px"
            fontWeight="600"
          />
          <div className='secondFooterDivTexts'>
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Download"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Pricing"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Locations"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Server"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Countries"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Blog"
            />
          </div>
        </div>

        <div className='thirtFooterDiv'>
          <Title 
            textContent="Engage" fontSize="18px"
            fontWeight="600"
          />
          <div className='thirtFooterDivTexts'>
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="LaslesVPN ?"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="FAQ"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Tutorials"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="About Us"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Privacy Policy"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Terms of Service"
            />
          </div>
        </div>

        <div className='fourtyFooterDiv'>
          <Title 
            textContent="Earn Money" fontSize="18px"
            fontWeight="600"
          />
          <div className='fourtyFooterDivTexts'>
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Affiliate"
            />
            <DescriptionText 
              fontSize="16px" fontWeight="400"
              textContent="Become Partner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;