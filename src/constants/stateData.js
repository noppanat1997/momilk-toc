export const INITIAL_STATE_DATA = {
  nodeDataArray: [
    {
      key: 0,
      fill: "black",
      color: "white",
      loc: "0 0",
      category: "Start",
    },
    { key: 1, text: "Size S", fill: "white", loc: "200 -150" },
    { key: 2, text: "Size M", fill: "white", loc: "200 0" },
    { key: 3, text: "Size L", fill: "white", loc: "200 150" },
    { key: 4, text: "บราวนี่", fill: "white", loc: "400 -200" },
    { key: 5, text: "กล้วย", fill: "white", loc: "400 -50" },
    { key: 6, text: "สตอเบอรี่", fill: "white", loc: "400 50" },
    { key: 7, text: "คอนเฟรค", fill: "white", loc: "400 200" },
    { key: 8, text: "บราวนี่", fill: "white", loc: "600 -200" },
    { key: 9, text: "กล้วย", fill: "white", loc: "600 -50" },
    { key: 10, text: "สตอเบอรี่", fill: "white", loc: "600 50" },
    { key: 11, text: "คอนเฟรค", fill: "white", loc: "600 200" },
    { key: 12, text: "หวานน้อย", fill: "white", loc: "800 -150" },
    { key: 13, text: "หวานปกติ", fill: "white", loc: "800 -0" },
    { key: 14, text: "หวานมาก", fill: "white", loc: "800 150" },
    { key: 15, text: "พร้อมเพย์", fill: "white", loc: "1000 -150" },
    { key: 16, text: "คนละครึ่ง", fill: "white", loc: "1000 -0" },
    { key: 17, text: "เงินสด", fill: "white", loc: "1000 150" },
    {
      key: 18,
      fill: "black",
      color: "white",
      loc: "1200 0",
      category: "End",
    },
  ],
  linkDataArray: [
    //layer 1 start -> size
    { key: -1, from: 0, to: 1, color: "grey" },
    { key: -2, from: 0, to: 2, color: "grey" },
    { key: -3, from: 0, to: 3, color: "grey" },
    //layer 2 size -> topping1
    { key: -4, from: 1, to: 4, color: "grey" },
    { key: -5, from: 1, to: 5, color: "grey" },
    { key: -6, from: 1, to: 6, color: "grey" },
    { key: -7, from: 1, to: 7, color: "grey" },

    { key: -8, from: 2, to: 4, color: "grey" },
    { key: -9, from: 2, to: 5, color: "grey" },
    { key: -10, from: 2, to: 6, color: "grey" },
    { key: -11, from: 2, to: 7, color: "grey" },

    { key: -12, from: 3, to: 4, color: "grey" },
    { key: -13, from: 3, to: 5, color: "grey" },
    { key: -14, from: 3, to: 6, color: "grey" },
    { key: -15, from: 3, to: 7, color: "grey" },
    //layer 3 topping1 -> topping2
    { key: -16, from: 4, to: 8, color: "grey" },
    { key: -17, from: 4, to: 9, color: "grey" },
    { key: -18, from: 4, to: 10, color: "grey" },
    { key: -19, from: 4, to: 11, color: "grey" },

    { key: -20, from: 5, to: 8, color: "grey" },
    { key: -21, from: 5, to: 9, color: "grey" },
    { key: -22, from: 5, to: 10, color: "grey" },
    { key: -23, from: 5, to: 11, color: "grey" },

    { key: -24, from: 6, to: 8, color: "grey" },
    { key: -26, from: 6, to: 9, color: "grey" },
    { key: -27, from: 6, to: 10, color: "grey" },
    { key: -28, from: 6, to: 11, color: "grey" },

    { key: -29, from: 7, to: 8, color: "grey" },
    { key: -30, from: 7, to: 9, color: "grey" },
    { key: -31, from: 7, to: 10, color: "grey" },
    { key: -32, from: 7, to: 11, color: "grey" },
    //layer 3 topping2 -> sweetness
    { key: -33, from: 8, to: 12, color: "grey" },
    { key: -34, from: 8, to: 13, color: "grey" },
    { key: -35, from: 8, to: 14, color: "grey" },

    { key: -36, from: 9, to: 12, color: "grey" },
    { key: -37, from: 9, to: 13, color: "grey" },
    { key: -38, from: 9, to: 14, color: "grey" },

    { key: -39, from: 10, to: 12, color: "grey" },
    { key: -40, from: 10, to: 13, color: "grey" },
    { key: -41, from: 10, to: 14, color: "grey" },

    { key: -42, from: 11, to: 12, color: "grey" },
    { key: -43, from: 11, to: 13, color: "grey" },
    { key: -44, from: 11, to: 14, color: "grey" },
    //layer 4 sweetness -> payment
    { key: -45, from: 12, to: 15, color: "grey" },
    { key: -46, from: 12, to: 16, color: "grey" },
    { key: -47, from: 12, to: 17, color: "grey" },

    { key: -48, from: 13, to: 15, color: "grey" },
    { key: -49, from: 13, to: 16, color: "grey" },
    { key: -50, from: 13, to: 17, color: "grey" },

    { key: -51, from: 14, to: 15, color: "grey" },
    { key: -52, from: 14, to: 16, color: "grey" },
    { key: -53, from: 14, to: 17, color: "grey" },
    //payment -> end
    { key: -54, from: 15, to: 18, color: "grey" },
    { key: -55, from: 16, to: 18, color: "grey" },
    { key: -56, from: 17, to: 18, color: "grey" },
  ],
}
