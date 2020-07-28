export const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const generateVietlott3D = () => {
  const number = getRandomInt(999);
  if (`${number}`.length === 1) {
    return `00${number}`.split('');
  }
  if (`${number}`.length === 2) {
    return `0${number}`.split('');
  }
  return `${number}`.split('');
};

export const generateVietlott4D = () => {
  const number = getRandomInt(9999);
  if (`${number}`.length === 1) {
    return `000${number}`.split('');
  }
  if (`${number}`.length === 2) {
    return `00${number}`.split('');
  }
  if (`${number}`.length === 3) {
    return `0${number}`.split('');
  }
  return `${number}`.split('');
};

export const generateVietlott645 = () => {
  const numbers = [];
  let i = 0;
  while (i < 6) {
    const randomNumb = getRandomInt(45);
    if (!numbers.find(e => e === randomNumb)) {
      numbers.push(randomNumb);
      i++;
    }
  }

  for (let i = 0; i < 6; i++) {
    numbers.push();
  }

  return numbers.map(e => (`${e}`.length === 1 ? `0${e}` : `${e}`));
};

export const generateVietlott655 = () => {
  const numbers = [];
  let i = 0;
  while (i < 6) {
    const randomNumb = getRandomInt(55);
    if (!numbers.find(e => e === randomNumb)) {
      numbers.push(randomNumb);
      i++;
    }
  }
  for (let i = 0; i < 6; i++) {
    numbers.push();
  }

  return numbers.map(e => (`${e}`.length === 1 ? `0${e}` : `${e}`));
};
