import React, { useEffect } from "react";

function MatrixLetters() {
  useEffect(() => {
    const canvas = document.getElementById("Matrix");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";

    const alphabet = katakana + latin + nums;

    const fontSize = 12;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = "rgb(10, 11, 15, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#66FCF1";
      context.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    setInterval(draw, 80);
  }, []);

  return <canvas id="Matrix" className="opacity-50 absolute -z-10"></canvas>;
}

export default MatrixLetters;
