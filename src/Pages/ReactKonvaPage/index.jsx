import { BodyImage } from "../../Components";
import "./style.scss";

const ReactKonvaPage = () => {
  return (
    <div className="ReactKonvaPage">
      <div className="containerIntroduction">
        <h1>Image manipulation</h1>
        <p>
          Let's imagine that you are on a visit to the doctor. The doctor will
          show you an image of the body and you must click on the parts of the
          body that hurt.
        </p>
      </div>
      <BodyImage />
    </div>
  );
};

export default ReactKonvaPage;
