"use strict";
const chalk = require("chalk");

// ASCII logo kamu
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

// Fungsi animasi pelangi bergerak
function animateLogo() {
  let hue = 0;
  const interval = setInterval(() => {
    console.clear();

    // Gambar logo dengan gradasi hue yang berubah
    const logo = ascii
      .split("\n")
      .map(line =>
        line
          .split("")
          .map(ch => chalk.hsv((hue + Math.random() * 60) % 360, 100, 100)(ch))
          .join("")
      )
      .join("\n");

    console.log(logo);

    const coloredInfo = infoLines
      .map((text, i) => chalk.hsv((hue + i * 60) % 360, 100, 100)(text))
      .join("\n");

    console.log("\n" + coloredInfo);

    hue = (hue + 10) % 360;
  }, 80);

  // Stop animasi setelah 3 detik biar gak ganggu proses
  setTimeout(() => clearInterval(interval), 3000);
}

module.exports = { animateLogo };
