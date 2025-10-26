"use strict";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import ora from "ora";

console.clear();
console.log(chalk.whiteBright("THANK YOU FOR USING BAILEYS") + chalk.greenBright("@xlilnyx"));
const spinner = ora({
  text: chalk.cyanBright("INITIALIZING SYSTEM..."),
  spinner: "earth"
}).start();

setTimeout(() => {
  spinner.succeed(chalk.greenBright("INITIALIZING SUCCESFULLY!!"));
  const ascii = figlet.textSync("XLILNYX", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default"
  });

  let frame = 0;
  const colors = ["red", "yellow", "green", "cyan", "blue", "magenta"];
  const animate = setInterval(() => {
    console.clear();
    const shifted = colors.slice(frame).concat(colors.slice(0, frame));
    const rainbow = gradient(shifted);
    console.log(rainbow.multiline(ascii));
      
    console.log(chalk.bold.cyan("OWNER :") + chalk.whiteBright("@xlilnyx"));
    console.log(chalk.bold.cyan("MY CONTACT :") + chalk.underline("t.me/xlilnyx"));
    console.log(chalk.bold.cyan("STATUS :") + chalk.green("HAS BEEN RUNNING"));
    
frame = (frame + 1) % colors.length;
  }, 300); // kecepatan animasi (ms)
  setTimeout(() => {
    clearInterval(animate);
    console.clear();
    const final = gradient.rainbow.multiline(ascii);
    console.log(final);
    console.log(chalk.greenBright("✨ XLILNYX ready to roll! ✨\n"));
  }, 10000);
}, 1500);

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
