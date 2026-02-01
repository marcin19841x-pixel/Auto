import { useRef } from "react";

export function Camera({ onCapture }: { onCapture: (img: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }
    });
    if (videoRef.current) videoRef.current.srcObject = stream;
  };

  const capture = () => {
    const video = videoRef.current!;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d")!.drawImage(video, 0, 0);
    onCapture(canvas.toDataURL("image/png"));
  };

  return (
    <>
      <video ref={videoRef} autoPlay playsInline width="100%" />
      <button onClick={start}>📷 Start kamery</button>
      <button onClick={capture}>📸 Zrób zdjęcie</button>
    </>
  );
}
