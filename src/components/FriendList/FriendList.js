import React from 'react';
import styleFriend from './FriendList.module.css';
import Amigosjson from '../data/FriendList.json';


export default function amigos(){
    // let selectRed =  {
    //     color:"red"
    // };
    // let selectred ={
    //     color:"green"
    // };
    
    return(
  
    <ul className= {styleFriend.friendlist}>
{/* ---------------------------------------mango ---------------------------*/}

  <li className={styleFriend.item}>
  {Amigosjson.Mango.Estado
    ? (<span className={`${styleFriend.circle} ${styleFriend.on}`}></span>)
    : (<span className={`${styleFriend.circle} ${styleFriend.off}`}></span>)}
  <img className={styleFriend.AvatarOn} src={Amigosjson.Mango.Avatar} alt="User avatar" width="60" />
  <p className={styleFriend.name}>{Amigosjson.Mango.Nombre}</p>
</li>
{/*-------------------------------------------------------------------------------- */}
{/* ------------------------------ KIWI ----------------------------*/}
<li className={styleFriend.item}>
  {Amigosjson.Kiwi.Estado
 ? (<span className={`${styleFriend.circle} ${styleFriend.on}`}></span>)
 : (<span className={`${styleFriend.circle} ${styleFriend.off}`}></span>)}
  <img className={styleFriend.AvatarOff} src={Amigosjson.Kiwi.Avatar} alt="User avatar" width="60" />
  <p className={styleFriend.name}>{Amigosjson.Kiwi.Nombre}</p>
</li>
{/* --------------------------------------------------------------------------------- */}

{/*------------------- --------- AJAX ---------------------------------------------------------- */}
  <li className={styleFriend.item}>
  {Amigosjson.Ajax.Estado
 ? (<span className={`${styleFriend.circle} ${styleFriend.on}`}></span>)
 : (<span className={`${styleFriend.circle} ${styleFriend.off}`}></span>)}
  <img className={styleFriend.AvatarOn} src={Amigosjson.Ajax.Avatar} alt="User avatar" width="60" />
  <p className={styleFriend.name}>{Amigosjson.Ajax.Nombre}</p>
</li>
{/* ------------------------------------ JAY --------------------------------------------- */}

  <li className={styleFriend.item}>
  {Amigosjson.Jay.Estado
? (<span className={`${styleFriend.circle} ${styleFriend.on}`}></span>)
: (<span className={`${styleFriend.circle} ${styleFriend.off}`}></span>)}
  <img className={styleFriend.AvatarOn} src={Amigosjson.Jay.Avatar} alt="User avatar" width="60"/>
  <p className={styleFriend.name}>{Amigosjson.Jay.Nombre}</p>
</li>
{/* --------------------------------------------- */}

{/* ------------- Poly ------------------------------------------------*/}
  <li className={styleFriend.item}>  {Amigosjson.Poly.Estado
? (<span className={`${styleFriend.circle} ${styleFriend.on}`}></span>)
: (<span className={`${styleFriend.circle} ${styleFriend.off}`}></span>)}
  <img className={styleFriend.AvatarOff} src={Amigosjson.Poly.Avatar} alt="User avatar" width="60" />
  <p className={styleFriend.name}>{Amigosjson.Poly.Nombre}</p>
</li>
</ul>
)
}