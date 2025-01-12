import { Row } from "react-bootstrap";
import ComicCard from "./comiccard";
import styles from "./component.module.css";
import { useRef } from "react";
import Link from "next/link";

export default function ComicSlider({ comics, name }) {
  const containerRef = useRef(null);

  function scrollPrev() {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth * 0.8,
        behavior: "smooth",
      });
    }
  }

  function scrollNext() {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth * 0.8,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <Row>
        <div className={styles.headers}>
          <h1>{name}</h1>
          <Link href={`/body/comiclistview?comicId=${comics.id}`} className={styles.link}>
            SEE ALL
          </Link>
        </div>
        <div className={styles.comic_slider}>
          <button className={styles.prev_btn} onClick={scrollPrev}>&lt;</button>
          <div className={styles.comic_container} ref={containerRef}>
            {comics.view.map((view, index) => (
              <ComicCard key={index} cardno={view.name} image={view.image} />
            ))}
          </div>
          <button className={styles.next_btn} onClick={scrollNext}>&gt;</button>
        </div>
      </Row>
    </div>
  );
}
