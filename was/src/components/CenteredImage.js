
import styles from "./CenteredImage.module.css";

function CenteredImage({src}){

    return <div className="image-container" className={styles.centeredImage}>
            <img src={src} alt="logo"/>
        </div>
}

export default CenteredImage;