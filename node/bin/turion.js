#!/usr/bin/env node
"use strict";

const VERSION = require("../package.json").version;

function printHelp() {
  console.log(`turion — coming soon

Usage:
  turion              Show this help
  -h, --help          Show this help
  -v, --version       Show version

This package is a placeholder; commands will land in a future release.`);
}

function main() {
  const argv = process.argv.slice(2);
  for (const a of argv) {
    if (a === "-v" || a === "--version") return console.log(VERSION);
    if (a === "-h" || a === "--help") return printHelp();
    console.error(`Unknown argument: ${a} (see: turion --help)`);
    process.exit(1);
  }
  printHelp();
}

main();
