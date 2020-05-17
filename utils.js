const generateUUID = require('uuid').v4;
const readLine = require('readline-sync');

function getAmount() {
  let input;
  do {
    input = readLine.questionInt('How much UUIDs do you want?\t', {
      defaultInput: 1,
    });
  } while (input === 0);

  const amount = Math.abs(input);
  return amount;
}

function getList() {
  const amount = getAmount();
  const list = Array(amount)
    .fill()
    .map(() => generateUUID());

  return list;
}

function log(list) {
  console.log('\n');
  list.forEach((UUID, index) => console.log(`[${index + 1}] - ${UUID}`));
}

module.exports = {
  getList,
  log,
};
