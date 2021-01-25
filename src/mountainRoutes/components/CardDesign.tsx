import { IonBadge, IonButton, IonCard, IonCardContent,  IonCardTitle, IonIcon, IonImg, IonItem, IonLabel, IonList, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react";
import { heartOutline, heartSharp, star, starHalf } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import './CardDesign.css'

export interface CardProps{
    id?: string,
    name?: string,
    photoURL?: string,
    difficulty?: string,
    rating?: number,
    lenght?: number,
    estTime?: string,
    reviews?: number,
    location?: string,
}

interface StarDesign{
    type: string,
}


const slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
  };

const CardDesign  : React.FC<CardProps>  = (props) => {
    const [like, setLike] = useState(false);
    const [stars, setStars] = useState<StarDesign[]>([]);

    useEffect(() => {
        let copy_rating = props.rating;
        if(copy_rating == null)
            copy_rating = 0;
        let aux_array: StarDesign[] = []
        for(let i = 0; i< 5; i++)
        {
            if(copy_rating >= 1)
            {
                copy_rating -= 1;
                aux_array.push({type: "full"});
            }
            else if(copy_rating >= 0.5)
            {
                copy_rating -= 0.5;
                aux_array.push({type: "half"});
            }
            else{
                aux_array.push({type: "none"});
            }
        }

        setStars(aux_array);
    }, [props.rating])
     
 
    return (

        <IonCard type="button" key={props.id} className="card">
            <IonCardTitle className="img_container">
                <IonSlides options={slideOpts} style={{"height" : "100%"}} pager onIonSlideDoubleTap={e=> setLike(true)}>
                    <IonSlide >
                    <IonImg className="main_img" src={props.photoURL}/>
                    </IonSlide>
                    <IonSlide>
                    <IonImg className="main_img" src={props.photoURL}/>
                    </IonSlide>
                    <IonSlide>
                    <IonImg className="main_img" src={props.photoURL}/>
                    </IonSlide>
                    
                </IonSlides>
                <IonButton onClick={e=> setLike(!like)} color={like ? "danger" : "light"} fill="clear" className="heart_ic">
                    <IonIcon  icon={like ? heartSharp :heartOutline} slot="icon-only"></IonIcon>
                </IonButton>
            </IonCardTitle>
            <IonCardContent className="card_data">    
           <IonText color="dark" className="title_text"><h3 className="title_text">{props.name}</h3></IonText>
           
           <IonText color="dark" className="location_text"><p className="location_text">{props.location}</p></IonText>
            <IonItem style={{"margin-right" : "-30px"}} lines="none" className="ion-no-padding">
                    <IonBadge style={{"width" : "70px"}}  color="primary" className="difficulty_text">{props.difficulty}</IonBadge>
                    <IonItem lines="none" className="ion-no-padding" slot="end">
                    {stars.map(el => 
                        <IonIcon className={el.type !== "none" ? "star_selected" : "star"} size="small" icon={(() => {
                            switch(el.type)
                            {
                                case "none":
                                    return star
                                case "half":
                                    return starHalf
                                default:
                                    return star
                            }
                        })()}/>
                    )}
                    
                    <IonText color="dark" className="difficulty_text">({props.reviews})</IonText>
                    </IonItem>
                </IonItem>
                    
               
                    <IonText color="dark" className="stats_text"><p>Length: {props.lenght}km * Est.{props.estTime}</p></IonText>
                    
                
            </IonCardContent>
           
        </IonCard>
    

       
    );
}

export default CardDesign



