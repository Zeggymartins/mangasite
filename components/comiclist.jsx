import { useRouter } from "next/router";
import ComicCard from "./comiccard";
import { comics } from "@/pages/comics";
import styles from "./component.module.css"
import { Col, Container, Row } from "react-bootstrap";

export default function ComicList() {
  const router = useRouter();
  const { comicId } = router.query;

  const selectedComic = comics.find((comic) => comic.id === comicId);

  if (!selectedComic || !selectedComic.view) {
    return <div>Comics not found</div>;
  }

  return (
    <div>
      <Container >
      <div className={styles.headers} style={{marginTop:'12px'}} >
        <h1>{selectedComic.name}</h1>
      </div>
      <Row>
        <div className={styles.search}>
        <label htmlFor="" className="form-label">Search comics</label>
        <input type="search" className="form-control"/>
        </div>
      </Row>
      <Container>
      <Row className={styles.list}>
      {selectedComic.view.map((view, index) => (
        <Col key={index} >
          <ComicCard cardno={view.id} image={view.image}/>
        </Col>
      ))}
      </Row>
      </Container>
      </Container>
    </div>
  );
}
