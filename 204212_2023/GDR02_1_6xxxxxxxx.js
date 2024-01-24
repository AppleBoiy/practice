#!/usr/bin/env node

// ชื่อ นามสกุล (ชื่อเล่น)
// 6XXXXXXXX
// GDR02_1
// 204212 Sec 00B

function processData(data) {
  let lines = data.split('\n');
  let i = 0;

  while (i < lines.length) {
    console.log(lines[i].trim());
    i++;
  }
}


function main() {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', processData);
}

if (require.main === module) {
  main();
}