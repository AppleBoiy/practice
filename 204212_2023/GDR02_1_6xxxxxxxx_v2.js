#!/usr/bin/env node

// ชื่อ นามสกุล (ชื่อเล่น)
// 6XXXXXXXX
// GDR02_1
// 204212 Sec 00B

function main() {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (data) => {
    data.split('\n').forEach((line) => {
      console.log(line.trim());
    });
  });

}

if (require.main === module) {
  main();
}