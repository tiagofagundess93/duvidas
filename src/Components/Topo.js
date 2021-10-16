
import styles from './Topo.module.css'

function Topo () {
    return (
        <nav class={styles.topo}>
            <ul>
            <li class={styles.item2}>example@gmail.com</li>
            <li class={styles.item2}>99 9 9999-9999 </li>
            <li class={styles.item2}>London & Japan </li>
            </ul>

            <div class="login">
                <ul>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </div>

        </nav>
        

    )

}

export default Topo