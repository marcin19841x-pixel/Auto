import { useState } from "react";
import { Camera } from "./components/Camera";
import { readMileage } from "./ocr/ocr";

export default function App() {
  const [image, setImage] = useState<string | null>(null);
  const [mileage, setMileage] = useState<number | null>(null);

  const onCapture = async (img: string) => {
    setImage(img);
    setMileage(await readMileage(img));
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>🚗 Fleet Monitor</h2>
      <Camera onCapture={onCapture} />
      {mileage && <p>Odczyt licznika: <b>{mileage} km</b></p>}
      {image && <img src={image} width="100%" />}
    </div>
  );
}
