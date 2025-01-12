import styles from "./component.module.css"
export default function ComicCard({ cardno, image }) {
    const cardStyle = {
        background: image ? `url(${image}) no-repeat center center / cover` : 'black',
      };
  
    return (
      <div className={styles.card} style={cardStyle}>
        <p>MycardNo.{cardno}</p>
      </div>
    );
  }