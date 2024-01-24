#!/usr/bin/env node

// ชื่อ นามสกุล (ชื่อเล่น)
// 6XXXXXXXX
// GDR02_2
// 204212 Sec 00B


function main() {
  const voteSummary = `4 3
Mewtwo, Pikachu, Suicune
Mewtwo, Suicune
Pikachu, Rayquaza, Charizard
Suicune, Pikachu, Charizard`;

  const records = storeVoteSummary(voteSummary);

  assertArraysEqual(
    voterDetails(records, 'Pikachu'),
    [
      ['v1', 2],
      ['v3', 1],
      ['v4', 2]
    ]
  );

  assertArraysEqual(
    voterDetails(records, 'Suicune'),
    [
      ['v1', 3],
      ['v2', 2],
      ['v4', 1]
    ]
  );
}

function storeVoteSummary(voteSummary) {
  return null;
}

function voterDetails(records, pokemon) {
  return null;
}

function assertArraysEqual(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  const isEqual = JSON.stringify(arr1) === JSON.stringify(arr2);

  if (!isEqual) {
    console.error('Assertion failed!');
    console.error('Expected:', arr2);
    console.error('Actual:', arr1);
    throw new Error('Assertion failed: Arrays are not equal.');
  }
}


// You need to export the functions to make them accessible in other files
module.exports = {
  storeVoteSummary,
  voterDetails
};

if (require.main === module) {
  main();
}