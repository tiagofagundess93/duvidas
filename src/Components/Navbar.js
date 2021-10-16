import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'


function Navbar () {
    return (

                           
        <nav class={styles.navbar}>  

                    <div id="shiba" >
            
                <ul>
                    <li>SHIBA</li>
                    </ul>
            
        </div>

            <ul class={styles.list}>
            <li class={styles.item}><Link to="./">Home</Link></li>
            <li class={styles.item}><Link to="./">Pages</Link></li>
            <li class={styles.item}><Link to="./">About</Link></li>
            <li class={styles.item}><Link to="./">Feature</Link></li>
            <li class={styles.item}><Link to="./">Token</Link></li>
            <li class={styles.item}><Link to="./">Roadmap</Link></li>
            <li class={styles.item}><Link to="./">Blog</Link></li>
            <li class={styles.item}><Link to="./">Contact</Link></li>
            </ul>
                      
           

        </nav>
        
    )

}

export default Navbar