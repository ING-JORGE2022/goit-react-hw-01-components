import React from "react";

import  stylePerfil from "./Perfil.module.css";
import PropTypes from 'prop-types'


export default function MyPerfil({ username, tag, location, avatar, stats }){
    return (
        <div className={stylePerfil.profile}>
         <div className={stylePerfil.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={stylePerfil.Avatar}
          />
          <p className ={stylePerfil.name}>{username}</p>
          <p className={stylePerfil.tag}>@{tag}</p>
          <p className={stylePerfil.location }>{location}</p>
         </div>
      
      
           <div className={stylePerfil.containerlist}>
            <ul class={stylePerfil.stats}>
             <li>
               <span className={stylePerfil.label}>Followers</span>
               <span className={stylePerfil.quantity}>{stats.followers}</span>
             </li>
             <li>
               <span className={stylePerfil.label} >Views</span>
               <span className={stylePerfil.quantity}>{stats.views}</span>
             </li>
             <li>
               <span className={stylePerfil.label}>Likes</span>
               <span className={stylePerfil.quantity}>{stats.likes}</span>
             </li>
            </ul>
           </div>
     
      </div>
    )
}

MyPerfil.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};