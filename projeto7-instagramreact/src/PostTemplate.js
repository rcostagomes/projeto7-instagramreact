
import Posts from "./Posts";
import React from "React";

const [curtida, setCurtida] = React.useState("heart-outline");
const [color, setColor] = React.useState("#262626");

export default function PostsTemplate(){
    return Posts.filter(props => props.post).map(props => 
        <div className="containerFeed">
            <div className="postFeed">
                <div className="topoPost">
                    <div   div className="usuario"> 
                        <img src={props.imagem}/>
                        <h3>{props.nome}</h3>
                    </div> 
                    <img src="./assets/img/ellipsis-horizontal 1.svg" alt=""/>
                </div>
            <img className="imgPost" src={props.post}alt=""/>
            <div className="interacaoPost">
                    <div class="intercaoPostEsquerda">
                    <ion-icon name={curtida} style={{color: color}} onClick={() => {(curtida === "heart-outline") ? setCurtida("heart") : setCurtida("heart-outline");
                    (color === "#262626") ? setColor("#ed4956") : setColor("#262626");}} ></ion-icon>





                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <img src="./assets/img/etiqueta.svg" alt=""/>
            </div>
                <div class="curtidasPost">
                        <img src="./assets/img/respondeai.svg" alt=""/>
                        <h3>Curtido por <span>adorable_animals</span> e <span>outras 99.159 pessoas</span></h3>
                </div>
            </div>
        </div> 
        );
};
