import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from "../../components/slider";
import { Row } from 'react-bootstrap';
import NavBar from '../../components/navbar';
import ComicSlider from '../../components/comicslider';
import ThemeSwitch from '../../components/switch';
import { comics } from "../../utils/comics";

export default function App() {
  
  return (
    <div>
      <Row>
        <ImageSlider />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <NavBar />
        <ThemeSwitch />
      </Row>
      <Row>
        {/* Pass "Latest Releases" category data to ComicSlider */}
        <ComicSlider
          comics={comics.find((category) => category.id === "latest-releases")}
          name="Latest Releases"
        />
      </Row>
      <Row>
        {/* Pass "Dark Comics" category data to ComicSlider */}
        <ComicSlider
          comics={comics.find((category) => category.id === "dark-comics")}
          name="Dark Comics"
        />
      </Row>
    </div>
  );
}
