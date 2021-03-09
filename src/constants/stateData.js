export const INITIAL_STATE_DATA = {
  nodeDataArray: [
    {
      key: 0,
      fill: "black",
      color: "white",
      loc: "0 0",
      category: "Start",
    },
    {
      key: 1,
      text: "ขนาด\nเล็ก",
      fill: "Crimson",
      color: "white",
      loc: "200 -150",
    },
    { key: 2, text: "ขนาด\nกลาง", fill: "CornflowerBlue", color: "white", loc: "200 0" },
    { key: 3, text: "ขนาด\nใหญ่", fill: "ForestGreen", color: "white", loc: "200 150" },
    { key: 4, text: "บราวนี่", fill: "GoldenRod", color: "white", loc: "400 -200" },
    { key: 5, text: "กล้วย", fill: "GoldenRod", color: "white", loc: "400 -50" },
    { key: 6, text: "สตอเบอรี่", fill: "GoldenRod", color: "white", loc: "400 50" },
    { key: 7, text: "คอนเฟรค", fill: "GoldenRod", color: "white", loc: "400 200" },
    { key: 8, text: "บราวนี่", fill: "GoldenRod", color: "white", loc: "600 -200" },
    { key: 9, text: "กล้วย", fill: "GoldenRod", color: "white", loc: "600 -50" },
    { key: 10, text: "สตอเบอรี่", fill: "GoldenRod", color: "white", loc: "600 50" },
    { key: 11, text: "คอนเฟรค", fill: "GoldenRod", color: "white", loc: "600 200" },
    { key: 12, text: "หวานน้อย", fill: "SaddleBrown", color: "white", loc: "800 -150" },
    { key: 13, text: "หวานปกติ", fill: "SaddleBrown", color: "white", loc: "800 -0" },
    { key: 14, text: "หวานมาก", fill: "SaddleBrown", color: "white", loc: "800 150" },
    { key: 15, text: "พร้อมเพย์", fill: "SaddleBrown", color: "white", loc: "1000 -150" },
    { key: 16, text: "คนละครึ่ง", fill: "SaddleBrown", color: "white", loc: "1000 -0" },
    { key: 17, text: "เงินสด", fill: "SaddleBrown", color: "white", loc: "1000 150" },
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
    { key: -1, from: 0, to: 1, color: "DarkGrey" },
    { key: -2, from: 0, to: 2, color: "DarkGrey" },
    { key: -3, from: 0, to: 3, color: "DarkGrey" },
    //layer 2 size -> topping1
    { key: -4, from: 1, to: 4, color: "DarkGrey" },
    { key: -5, from: 1, to: 5, color: "DarkGrey" },
    { key: -6, from: 1, to: 6, color: "DarkGrey" },
    { key: -7, from: 1, to: 7, color: "DarkGrey" },

    { key: -8, from: 2, to: 4, color: "DarkGrey" },
    { key: -9, from: 2, to: 5, color: "DarkGrey" },
    { key: -10, from: 2, to: 6, color: "DarkGrey" },
    { key: -11, from: 2, to: 7, color: "DarkGrey" },

    { key: -12, from: 3, to: 4, color: "DarkGrey" },
    { key: -13, from: 3, to: 5, color: "DarkGrey" },
    { key: -14, from: 3, to: 6, color: "DarkGrey" },
    { key: -15, from: 3, to: 7, color: "DarkGrey" },
    //layer 3 topping1 -> topping2
    { key: -16, from: 4, to: 8, color: "DarkGrey" },
    { key: -17, from: 4, to: 9, color: "DarkGrey" },
    { key: -18, from: 4, to: 10, color: "DarkGrey" },
    { key: -19, from: 4, to: 11, color: "DarkGrey" },

    { key: -20, from: 5, to: 8, color: "DarkGrey" },
    { key: -21, from: 5, to: 9, color: "DarkGrey" },
    { key: -22, from: 5, to: 10, color: "DarkGrey" },
    { key: -23, from: 5, to: 11, color: "DarkGrey" },

    { key: -24, from: 6, to: 8, color: "DarkGrey" },
    { key: -26, from: 6, to: 9, color: "DarkGrey" },
    { key: -27, from: 6, to: 10, color: "DarkGrey" },
    { key: -28, from: 6, to: 11, color: "DarkGrey" },

    { key: -29, from: 7, to: 8, color: "DarkGrey" },
    { key: -30, from: 7, to: 9, color: "DarkGrey" },
    { key: -31, from: 7, to: 10, color: "DarkGrey" },
    { key: -32, from: 7, to: 11, color: "DarkGrey" },
    //layer 3 topping2 -> sweetness
    { key: -33, from: 8, to: 12, color: "DarkGrey" },
    { key: -34, from: 8, to: 13, color: "DarkGrey" },
    { key: -35, from: 8, to: 14, color: "DarkGrey" },

    { key: -36, from: 9, to: 12, color: "DarkGrey" },
    { key: -37, from: 9, to: 13, color: "DarkGrey" },
    { key: -38, from: 9, to: 14, color: "DarkGrey" },

    { key: -39, from: 10, to: 12, color: "DarkGrey" },
    { key: -40, from: 10, to: 13, color: "DarkGrey" },
    { key: -41, from: 10, to: 14, color: "DarkGrey" },

    { key: -42, from: 11, to: 12, color: "DarkGrey" },
    { key: -43, from: 11, to: 13, color: "DarkGrey" },
    { key: -44, from: 11, to: 14, color: "DarkGrey" },
    //layer 4 sweetness -> payment
    { key: -45, from: 12, to: 15, color: "DarkGrey" },
    { key: -46, from: 12, to: 16, color: "DarkGrey" },
    { key: -47, from: 12, to: 17, color: "DarkGrey" },

    { key: -48, from: 13, to: 15, color: "DarkGrey" },
    { key: -49, from: 13, to: 16, color: "DarkGrey" },
    { key: -50, from: 13, to: 17, color: "DarkGrey" },

    { key: -51, from: 14, to: 15, color: "DarkGrey" },
    { key: -52, from: 14, to: 16, color: "DarkGrey" },
    { key: -53, from: 14, to: 17, color: "DarkGrey" },
    //payment -> end
    { key: -54, from: 15, to: 18, color: "DarkGrey" },
    { key: -55, from: 16, to: 18, color: "DarkGrey" },
    { key: -56, from: 17, to: 18, color: "DarkGrey" },
  ],
}
