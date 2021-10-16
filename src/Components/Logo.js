import shib from "./img/shiba.png"
import styles from "./Logo.module.css"
import { Link } from "react-router-dom"


function Logo () {
    return (
        <nav class={styles.logo}>  

            <div id="sign">
               <h1>Cryp To Currency Blockhain Token</h1>
               <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                
                   <button id="sign" class="signup"><Link to="./">SIGN UP </Link></button>
                   
                  
            </div>
                    
                                     
             <div id="logo" class="logo">
                     <img src={shib} alt="costs" height="450px"></img>
           </div>
           </nav>
    )
}

export default Logo