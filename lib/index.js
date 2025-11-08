import ora from "ora";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import readline from "readline";
const clearConsole = () => process.stdout.write("\x1Bc");
function printCentered(text) {
  const terminalWidth = process.stdout.columns;
  const lines = text.split("\n");
  return lines
    .map(line => {
      const pad = Math.floor((terminalWidth - line.length) / 2);
      return " ".repeat(Math.max(pad, 0)) + line;
    })
    .join("\n");
}

const spinner = ora({
  text: chalk.cyan("REBOOTING SYSTEM..."),
  spinner: "moon"
}).start();

const steps = [
  "INITIALIZING SOCKET...",
  "LOADING ASSETS...",
  "CONNECTING TO BAILEYS...",
  "CONNECT BAILEYS PROCESS..."
];

let step = 0;
const stepInterval = setInterval(() => {
  spinner.text = chalk.cyan(steps[step % steps.length]);
  step++;
}, 1000);
setTimeout(() => {
  clearInterval(stepInterval);
  spinner.succeed(chalk.green("BAILEYS SOCKET XLILNYX CONNECTED..."));

  setTimeout(() => {
    clearConsole();

    const ascii = figlet.textSync("XLILNYX", {
      font: "ANSI Shadow",
      horizontalLayout: "default",
      verticalLayout: "default"
    });

    let frame = 0;
    const colors = ["red", "yellow", "green", "cyan", "blue", "magenta"];

    const animate = setInterval(() => {
      clearConsole();
      const shifted = colors.slice(frame).concat(colors.slice(0, frame));
      const rainbow = gradient(shifted);

      // Centered figlet
      console.log(printCentered(rainbow.multiline(ascii)) + "\n");

      // Centered text bawahnya
      console.log(printCentered(chalk.bold.cyan("OWNER :") + chalk.whiteBright(" @xlilnyx")));
      console.log(printCentered(chalk.bold.cyan("MY CONTACT :") + chalk.underline("t.me/xlilnyx")));
      console.log(printCentered(chalk.bold.cyan("STATUS :") + chalk.green("HAS BEEN RUNNING")));

      frame = (frame + 1) % colors.length;
    }, 300);

    // Hentikan animasi & tampilkan hasil akhir statis
    setTimeout(() => {
      clearInterval(animate);
      clearConsole();
      console.log(printCentered(gradient.rainbow.multiline(ascii)) + "\n");
      console.log(printCentered(chalk.greenBright("THANKSYOU FOR USING MY SOCKET BAILEYS❤\n")));
    }, 10000);
  }, 1000);
}, steps.length * 1000 + 1000);

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
exports.default = Socket_1.default;
