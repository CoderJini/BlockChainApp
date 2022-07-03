import styles from "./Hello.module.css"
import World from "./World"

const Hello = () =>{
    return (
        <dev>
            <h2 className={styles.box}>Hellow</h2>
            <World/>
        </dev> 
    )
}

export default Hello;