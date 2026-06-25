import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    // initialisation  des états pour le nombre de likes et de no-likes
    this.state = {
        likes: 0,
        dislikes : 0,
        totalRatings : 0,
        // La ligne suivante permet de créer un évenement handlelike  pour le bouton like 
        handleLike : () => {
        /*
           - Dans le code ci-dessus, les fonctions fléchées, handleLike et handleDislike, sont appelées lorsque l'utilisateur clique sur le bouton "j'aime" ou "je n'aime pas", respectivement.
           - Les fonctions utilisent la méthode setState pour mettre à jour l'état du composant. À l'intérieur de setState, l'état précédent (prevState) est accessible, ce qui contient l'état précédent du composant avant la mise à jour.
            - Ensuite, le compteur des "j'aime" ou "je n'aime pas" est incrémenté de un et défini comme la nouvelle valeur d'état.
            - Cela garantit que chaque clic sur un bouton met à jour avec précision le compteur correspondant dans l'état du composant.
        */
       this.setState((prevState) => ({
            likes : prevState.likes + 1, totalRatings: prevState.totalRatings + 1
       }));

        },
        // Logique du code de mise à jour des no-likes ou dislikes

        handleDislike : () => {
        this.setState((prevState) => ({
            dislikes : prevState.dislikes + 1, totalRatings: prevState.totalRatings + 1
        }))

        }
    };
  }
  render() {
    return (
     <>
     <div className="content-rating">
        <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga rem maiores exercitationem tenetur. Praesentium, atque possimus quos sunt quia, maiores molestias facere debitis nostrum doloribus, tempora expedita adipisci deserunt?
        </p>

        <div className="rating-buttons">
            /**
                1- Appeler ces gestionnaires d'événements en utilisant le clic sur les boutons "j'aime" et "je n'aime pas".
                2- Utiliser l'événement onClick sur les boutons et appeler handleLike et handleDislike sur les boutons Likes et Dislikes, respectivement, comme montré dans le code donné
             */
            <button className="like-button" onClick={this.state.handleLike}>
                like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
                dislike ({this.state.dislikes})
            </button>

                Totales Evaluations: {this.state.totalRatings}

        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
