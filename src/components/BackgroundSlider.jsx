import React, { useState, useEffect } from "react";

function ImageSlider({ linksFile, numColumns, numRows }) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetch("/data/links.txt")
      .then((response) => response.text())
      .then((text) => setImageUrls(text.trim().split("\n")));
  }, [linksFile]);

  useEffect(() => {
    const numImages = numColumns * numRows;
    const images = [];
    for (let i = 0; i < numImages; i++) {
      images.push({
        url: imageUrls[i % imageUrls.length],
        nextChangeTime: getNextChangeTime(),
      });
    }
    const intervalId = setInterval(() => {
      images.forEach((image, i) => {
        if (new Date() >= image.nextChangeTime) {
          changeImage(i, images, setImageUrls);
          image.nextChangeTime = getNextChangeTime();
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [imageUrls, numColumns, numRows]);

  function getNextChangeTime() {
    const minDelay = 1000;
    const maxDelay = 5000;
    const delay =
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    return new Date(Date.now() + delay);
  }

  function changeImage(index, images, setImageUrls) {
    const newImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    setImageUrls((prevImageUrls) => {
      const newImageUrls = [...prevImageUrls];
      newImageUrls[index % prevImageUrls.length] = newImageUrl;
      return newImageUrls;
    });
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
      }}
    >
      {imageUrls.map((url, i) => (
        <img
          key={i}
          src={url}
          style={{
            gridColumn: `${(i % numColumns) + 1} / span 1`,
            gridRow: `${Math.floor(i / numColumns) + 1} / span 1`,
            width: "100%",
            height: "100%",
          }}
        />
      ))}
    </div>
  );
}
