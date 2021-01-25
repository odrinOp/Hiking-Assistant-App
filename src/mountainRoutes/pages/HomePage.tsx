import React, { useState } from 'react';
import {
  createAnimation,
    IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import CardDesign, { CardProps } from  '../components/CardDesign'
import { arrowForwardCircle, create } from 'ionicons/icons';
import { routes } from '../api/Provider';





export const HomePage: React.FC = () => {

  
  const scrollAnimation = (pos: number, velocity: number, offset: number) =>{
    
    const header = document.querySelector(".scrollable_header");
    const title = document.querySelector(".main_title")
    if(header && title)
    {
      const height = title.clientHeight;
      const animationHeader = createAnimation().addElement(header);
      console.log("Position: " + pos)
      console.log("Height: " + height )
      console.log("Velocity: " + velocity)
      if(velocity > 0)
      {
        //scroll to bottom
        if(pos  <= height - offset)
        {
          console.log("Scroll to bot")
          animationHeader.to("top", `-${pos}px`);
          animationHeader.play();
        }
        else{
         return
        }
      }

      else if(velocity < 0){
        //scroll to top
        if(pos  <= height - offset)
        {
          //animationHeader.to("opacity" , "1");
          animationHeader.to("top", `-${pos}px`);
          animationHeader.play();
          return
        }

      }
      

    }
  }


  

  return (
  <IonPage>
   <IonHeader style={{"position" : "relative"}} color="transparent" className="scrollable_header">
     <IonToolbar color="light">
      <IonTitle color="dark" className="main_title" ><h1>Explore</h1></IonTitle>
        <IonSearchbar className="searchBar"></IonSearchbar>
    </IonToolbar>
   </IonHeader>

    <IonContent  scrollEvents fullscreen={true} onIonScroll={ e=> {console.log("Scroll");scrollAnimation(e.detail.currentY,e.detail.velocityY,1)}} >
    
      <IonTitle style={{"marginTop" : "30px"}} color="dark">Top trails nearby</IonTitle>
                <IonSlides options={{slidesPerView : '1.2' ,zoom: false}}>
                {routes.map(el => 
                <IonSlide>
                    <CardDesign id={el.id}  location={el.location} photoURL= {el.photoURL} name={el.name} rating={el.rating} reviews={el.reviews} difficulty={el.difficulty} estTime={el.estTime} lenght={el.lenght}/>
                    </IonSlide>
                )}
                </IonSlides>
                <br></br>
                <IonTitle color="dark">Best views</IonTitle>
                <IonSlides options={{slidesPerView : '1.2' ,zoom: false}}>
                {routes.map(el => 
                <IonSlide>
                    <CardDesign id={el.id}  location={el.location} photoURL= {el.photoURL} name={el.name} rating={el.rating} reviews={el.reviews} difficulty={el.difficulty} estTime={el.estTime} lenght={el.lenght}/>
                    </IonSlide>
                )}
                <IonSlide style={{"height" : "auto"}}>
                    <IonButton size="large" color="transparent">
                        <IonIcon icon={arrowForwardCircle} size="large" color="dark"/>
                    </IonButton>
                </IonSlide>
                </IonSlides>
                <br></br>

                <IonTitle color="dark">Weekend worthy</IonTitle>
                <IonSlides options={{slidesPerView : '1.2' ,zoom: false}}>
                {routes.map(el => 
                <IonSlide>
                    <CardDesign id={el.id}  location={el.location} photoURL= {el.photoURL} name={el.name} rating={el.rating} reviews={el.reviews} difficulty={el.difficulty} estTime={el.estTime} lenght={el.lenght}/>
                    </IonSlide>
                )}
                </IonSlides>

    </IonContent>
  </IonPage>
);
                }