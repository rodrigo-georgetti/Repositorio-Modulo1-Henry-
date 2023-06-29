const {
  checkSeatStatus,
  getRowNumber,
  book,
  layoutResults,
} = require("../homework");

describe("checkSeatStatus()", () => {
  it("checkSeatStatus is a function", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });
  it("should throw a TypeError if first parameter is not a string", () => {
    expect(() => checkSeatStatus(1)).toThrow(
      new TypeError("First parameter is not a string")
    );
    expect(() => checkSeatStatus(true)).toThrow(
      new TypeError("First parameter is not a string")
    );
  });
  it("should throw a TypeError if first parameter is an empty string or the string´s length is greater than 1", () => {
    expect(() => checkSeatStatus("")).toThrow(
      new TypeError("First parameter is an empty string")
    );
    expect(() => checkSeatStatus("AB")).toThrow(
      new TypeError("First parameter string´s length is greater than 1")
    );
  });
  it("should throw a TypeError if first parameter is not A, B, C, D or E", () => {
    expect(() => checkSeatStatus("Z")).toThrow(
      new TypeError("Row must be A, B, C, D or E")
    );
    expect(() => checkSeatStatus("Ñ")).toThrow(
      new TypeError("Row must be A, B, C, D or E")
    );
  });
  it("should throw a TypeError if second parameter is not a number", () => {
    expect(() => checkSeatStatus("A", "henry")).toThrow(
      new TypeError("Second parameter is not a number")
    );
    expect(() => checkSeatStatus("A", false)).toThrow(
      new TypeError("Second parameter is not a number")
    );
  });
  it("should throw a TypeError if second parameter is not 0, 1, 2 or 3", () => {
    expect(() => checkSeatStatus("A", -1)).toThrow(
      new TypeError("Number must be 0, 1, 2 or 3")
    );
    expect(() => checkSeatStatus("A", 4)).toThrow(
      new TypeError("Number must be 0, 1, 2 or 3")
    );
  });
});

describe("getRowNumber", () => {
  it("should return 1 if the letter given is an A", () => {
    expect(getRowNumber("A")).toBe(0);
  });
  it("should return 3 if the letter given is an C", () => {
    expect(getRowNumber("C")).toBe(2);
  });
  it("should return true if the given seat defined by row and column is booked", () => {
    expect(checkSeatStatus("A", 1)).toBe(true);
  });
  it("should return false if the given seat defined by row and column is booked", () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
  });
});

describe("book", () => {
  it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
    expect(book("E", 3)).toBe("Seat in E3 successfully booked");
    expect(checkSeatStatus("E", 3)).toBe(true);
  });
  it('should return "Seat in XX is already booked" if the given seat is already booked', () => {
    expect(book("A", 1)).toBe("Seat in A1 is already booked");
  });
});

describe("layoutResults", () => {
  it("should return the correct layout result", () => {
    expect(
      layoutResults([
        [
          { type: "VIP", booked: false },
          { type: "VIP", booked: true },
        ],
        [
          { type: "NORMAL", booked: true },
          { type: "ECONOMIC", booked: true },
        ],
      ])
    ).toBe(
      "asientos totales: 4\nasientos reservados: 3\nasientos libres: 1\nrecaudacion: 1350"
    );
  });
  it("should return the correct layout result", () => {
    expect(
      layoutResults([
        [
          { type: "VIP", booked: true },
          { type: "NORMAL", booked: false },
        ],
        [
          { type: "NORMAL", booked: true },
          { type: "NORMAL", booked: true },
        ],
        [
          { type: "NORMAL", booked: false },
          { type: "ECONOMIC", booked: true },
        ],
      ])
    ).toBe(
      "asientos totales: 6\nasientos reservados: 4\nasientos libres: 2\nrecaudacion: 1800"
    );
  });
});