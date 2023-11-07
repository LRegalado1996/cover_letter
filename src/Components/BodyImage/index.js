import React, { useState, useRef } from "react";
import { Stage, Layer, Image, Line } from "react-konva";
import useImage from "use-image";
import bodyImage from "../../assets/images/body.png";
import "./style.scss";

const BodyImage = () => {
  const [lines, setLines] = useState([]);
  const stageRef = useRef(null);

  const [img] = useImage(bodyImage);

  const handleStageClick = (e) => {
    const stage = stageRef.current;
    const pointer = stage.getPointerPosition();
    setLines([...lines, { x: pointer.x, y: pointer.y }]);
  };

  const downloadImage = () => {
    const stage = stageRef.current;
    const image = stage.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "body_with_pain.png";
    link.click();
  };

  return (
    <div className="BodyImage">
      <Stage
        width={320}
        height={600}
        onClick={() => handleStageClick()}
        onTap={() => handleStageClick()}
        ref={stageRef}
      >
        <Layer>
          <Image image={img} width={320} height={600} />
          {lines.map((line, i) => (
            <>
              <Line
                points={[line.x - 10, line.y + 10, line.x + 10, line.y - 10]}
                stroke="red"
                strokeWidth={1}
              />
              <Line
                points={[line.x + 10, line.y + 10, line.x - 10, line.y - 10]}
                stroke="red"
                strokeWidth={1}
              />
            </>
          ))}
        </Layer>
      </Stage>

      <div className="containerButtons">
        <button onClick={downloadImage}>Download</button>
      </div>
    </div>
  );
};

export default BodyImage;
