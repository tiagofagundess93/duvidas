import styles from './Welcome.module.css'
import bemvindo from './img/bemvindo.jpg'
import { Link } from "react-router-dom"

function Welcome () {
    return (
        <nav class={styles.welcome}>

            <div id="welcome1">
            <h1>WELCOME TO RAUF CRY COMPANY</h1>
            <h2>A cryptocurrency, crypto-currency, or crypto is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of a computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership.It typically does not exist in physical form (like paper money) and is typically not issued by a central authority. Cryptocurrencies typically use decentralized control as opposed to centralized digital currency and central banking systems.</h2>
                 <button id="facebook" class="signup"><Link to="./">FACEBOOK </Link></button>
                 <button id="twitter" class="twitter"><Link to="./">TWITTER </Link></button>
           
            </div>
        <div id="bemvindo">
            <img src={bemvindo} alt="costs" height="500px"></img>
        </div>

        </nav>



    )
}

export default Welcome