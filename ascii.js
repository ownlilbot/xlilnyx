"use strict";
const chalk = require("chalk");

// ASCII LOGO
const ascii = `
 __  ___     ___ _     _   ___   ____  __
 \\ \\/ / |   |_ _| |   | \\ | \\ \\ / /\\ \\/ /
  \\  /| |    | || |   |  \\| |\\ V /  \\  / 
  /  \\| |___ | || |___| |\\  | | |   /  \\ 
 /_/\\_\\_____|___|_____|_| \\_| |_|  /_/\\_\\
`;

const infoLines = [
  "DEVELOPER : XLILNYX",
  "THANKS TO : ALL PARTNER",
  "ALL INFO  : @allaboutmeyaw"
];

// warna pelangi (RGB)
const rainbowColors = [
  [255, 0, 0],     // Merah
  [255, 127, 0],   // Oranye
  [255, 255, 0],   // Kuning
  [0, 255, 0],     // Hijau
  [0, 0, 255],     // Biru
  [139, 0, 255]    // Ungu
];

// Fungsi menggambar logo dengan perubahan warna halus
function drawFrame(shift = 0, brightness = 1) {
  const logo = ascii
    .split("\n")
    .map((line, i) =>
      line
        .split("")
        .map((ch, j) => {
          const colorIndex = (i + j + shift) % rainbowColors.length;
          const [r, g, b] = rainbowColors[colorIndex];
          return chalk.rgb(
            Math.floor(r * brightness),
            Math.floor(g * brightness),
            Math.floor(b * brightness)
          )(ch);
        })
        .join("")
    )
    .join("\n");

  console.clear();
  console.log(logo);

  const info = infoLines
    .map((t) =>
      chalk.rgb(
        Math.floor(255 * brightness),
        Math.floor(180 * brightness),
        Math.floor(255 * brightness)
      )(t)
    )
    .join("\n");

  console.log("\n" + info);
}

// Fungsi utama animasi “bernapas” dan berganti warna
function animateLogo() {
  let shift = 0;
  let brightness = 1;
  let dir = -0.02;

  setInterval(() => {
    drawFrame(shift, brightness);
    shift = (shift + 1) % rainbowColors.length;
    brightness += dir;

    // Pantulan brightness (naik-turun seperti bernafas)
    if (brightness <= 0.4 || brightness >= 1) dir *= -1;
  }, 100); // ganti ke 60 kalau mau lebih halus
}

module.exports = { animateLogo };
