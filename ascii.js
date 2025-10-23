"use strict";
const chalk = require("chalk");

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

function animateLogo() {
  let hue = 0;
  const interval = setInterval(() => {
    console.clear();
    let logo = ascii
      .split("\n")
      .map(line =>
        line
          ? line
              .split("")
              .map(ch => chalk.hsv((hue + Math.random() * 60) % 360, 100, 100)(ch))
              .join("")
          : ""
      )
      .join("\n");

    console.log(logo);
    console.log(
      "\n" +
        infoLines
          .map(t => chalk.hsv((hue + 180) % 360, 100, 100)(t))
          .join("\n")
    );

    hue = (hue + 10) % 360;
  }, 100);

  // Stop animasi setelah 3 detik
  setTimeout(() => clearInterval(interval), 3000);
}

module.exports = { animateLogo };
