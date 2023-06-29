const layout = [
  [
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

function layoutResults(layout) {
  let iterator = 0;
  let isBooked = 0;
  let notBooked = 0;
  let amount = 0;

  for (let i = 0; i < Object.keys(layout).length; i++) {
    for (let j = 0; j < Object.keys(layout[i]).length; j++) {
      iterator++;
      if (layout[i][j].booked) {
        isBooked++;
        switch (layout[i][j].type) {
          case "VIP":
            amount += 600;
            break;
          case "NORMAL":
            amount += 450;
            break;
          case "ECONOMIC":
            amount += 300;
            break;
        }
      } else {
        notBooked++;
      }
    }
  }
  return (
    "asientos totales: " +
    iterator +
    "\nasientos reservados: " +
    isBooked +
    "\nasientos libres: " +
    notBooked +
    "\nrecaudacion: " +
    amount
  );
}

function getSeat(letter, number) {
  const numberRow = getRowNumber(letter);
  const layoutRows = layout[numberRow];
  const seat = layoutRows[number];
  return seat;
}

function checkSeatStatus(row, number) {
  if (typeof row !== "string") {
    throw new Error("First parameter is not a string");
  } else if (row.length === 0) {
    throw new Error("First parameter is an empty string");
  } else if (row.length > 1) {
    throw new Error("First parameter string´s length is greater than 1");
  } else if (row.charCodeAt(0) < 65 || row.charCodeAt(0) > 69) {
    throw new Error("Row must be A, B, C, D or E");
  } else if (typeof number !== "number") {
    throw new Error("Second parameter is not a number");
  } else if (number < 0 || number > 3) {
    throw new Error("Number must be 0, 1, 2 or 3");
  }
  const seat = getSeat(row, number);
  return seat.booked;
}

function getRowNumber(letter) {
  return letter.charCodeAt(0) - 65;
}

function book(row, number) {
  if (checkSeatStatus(row, number)) {
    return `Seat in ${row}${number} is already booked`;
  } else {
    const seat = getSeat(row, number);
    seat.booked = true;
    return `Seat in ${row}${number} successfully booked`;
  }
}

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
  getSeat,
  layoutResults,
};