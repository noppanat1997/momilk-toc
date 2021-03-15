export const INITIAL_STATE_DATA = {
  nodeDataArray: [
    {
      key: 101,
      fill: "#ffffff00",
      color: "white",
      loc: "-150 0",
    },
    {
      key: 0,
      value: "start",
      fill: "PaleVioletRed",
      color: "white",
      loc: "0 0",
      category: "Start",
    },
    {
      key: 1,
      value: "s",
      text: "ขนาด\nเล็ก",
      fill: "Silver",
      color: "white",
      loc: "200 -150",
    },
    {
      key: 2,
      value: "l",
      text: "ขนาด\nใหญ่",
      fill: "Silver",
      color: "white",
      loc: "200 150",
    },
    {
      key: 3,
      value: "s_brownie",
      text: "ขนาดเล็ก\nใส่บราวนี่",
      fill: "Silver",
      color: "white",
      loc: "450 -320",
    },
    {
      key: 4,
      value: "s_banana",
      text: "ขนาดเล็ก\nใส่กล้วย",
      fill: "Silver",
      color: "white",
      loc: "450 -200",
    },
    {
      key: 5,
      value: "s_cereal",
      text: "ขนาดเล็ก\nใส่คอนเฟรก",
      fill: "Silver",
      color: "white",
      loc: "450 -80",
    },
    {
      key: 6,
      value: "l_brownie",
      text: "ขนาดใหญ่\nใส่บราวนี่",
      fill: "Silver",
      color: "white",
      loc: "450 80",
    },
    {
      key: 7,
      value: "l_banana",
      text: "ขนาดใหญ่\nใส่กล้วย",
      fill: "Silver",
      color: "white",
      loc: "450 200",
    },
    {
      key: 8,
      value: "l_cereal",
      text: "ขนาดใหญ่\nใส่คอนเฟรก",
      fill: "Silver",
      color: "white",
      loc: "450 320",
    },
    {
      key: 9,
      value: "s_brownie_milk",
      text: "ขนาดเล็ก\nใส่บราวนี่\nใส่นม",
      fill: "Silver",
      color: "white",
      loc: "700 -320",
    },
    {
      key: 10,
      value: "s_banana_milk",
      text: "ขนาดเล็ก\nใส่กล้วย\nใส่นม",
      fill: "Silver",
      color: "white",
      loc: "700 -200",
    },
    {
      key: 11,
      value: "s_cereal_milk",
      text: "ขนาดเล็ก\nใส่คอนเฟรก\nใส่นม",
      fill: "Silver",
      color: "white",
      loc: "700 -80",
    },
    {
      key: 12,
      value: "l_brownie_milk",
      text: "ขนาดใหญ่\nใส่บราวนี่\nใส่นม",
      fill: "Silver",
      color: "white",
      loc: "700 80",
    },
    {
      key: 13,
      value: "l_banana_milk",
      text: "ขนาดใหญ่\nใส่กล้วย\nใส่นม",
      fill: "Silver",
      color: "white",
      loc: "700 200",
    },
    {
      key: 14,
      value: "l_cereal_milk",
      text: "ขนาดเล็ก\nใส่คอนเฟรก\nใส่นม",
      fill: "Silver",
      color: "white",
      loc: "700 320",
    },
    {
      key: 15,
      value: "end",
      fill: "PaleVioletRed",
      color: "white",
      loc: "900 0",
      category: "End",
    },
    {
      key: 16,
      value: "trap",
      text: "Trap",
      fill: "Silver",
      color: "white",
      loc: "1100 0",
      category: "Trap",
    },
  ],
  linkDataArray: [
    //Somewhere -> start
    { key: -1, from: 101, to: 0, color: "white", zOrder: 1, visible: false },
    //OutStart Node
    {
      key: -2,
      from: 0,
      to: 0,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "บราวนี่,กล้วย,คอนเฟรก,ใส่นม,สั่งซื้อ",
    },
    { key: -3, from: 0, to: 1, color: "white", zOrder: 1, visible: false, text: "ขนาดเล็ก" },
    { key: -4, from: 0, to: 2, color: "white", zOrder: 1, visible: false, text: "ขนาดใหญ่" },
    //OutSmallSize Node
    { key: -5, from: 1, to: 2, color: "white", zOrder: 1, visible: false, text: "ขนาดใหญ่" },
    { key: -6, from: 1, to: 3, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -7, from: 1, to: 4, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    { key: -8, from: 1, to: 5, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    {
      key: -9,
      from: 1,
      to: 1,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดเล็ก,ใส่นม,สั่งซื้อ",
    },
    { key: -10, from: 1, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },

    //OutLargeSize Node
    { key: -11, from: 2, to: 1, color: "white", zOrder: 1, visible: false, text: "ขนาดเล็ก" },
    { key: -12, from: 2, to: 6, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -13, from: 2, to: 7, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    { key: -14, from: 2, to: 8, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    {
      key: -15,
      from: 2,
      to: 2,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดใหญ่,ใส่นม,สั่งซื้อ",
    },
    { key: -16, from: 2, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },

    //OutSmallBrownie Node
    { key: -17, from: 3, to: 4, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    { key: -18, from: 3, to: 5, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    {
      key: -19,
      from: 3,
      to: 3,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "บราวนี่,ขนาดเล็ก",
    },
    { key: -20, from: 3, to: 9, color: "white", zOrder: 1, visible: false, text: "ใส่นม" },
    { key: -21, from: 3, to: 6, color: "white", zOrder: 1, visible: false, text: "ขนาดใหญ่" },
    { key: -22, from: 3, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -23, from: 3, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },

    //OutSmallBanana Node
    { key: -24, from: 4, to: 3, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -25, from: 4, to: 5, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    { key: -26, from: 4, to: 7, color: "white", zOrder: 1, visible: false, text: "ขนาดใหญ่" },
    { key: -27, from: 4, to: 4, color: "white", zOrder: 1, visible: false, text: "กล้วย,ขนาดเล็ก" },
    { key: -28, from: 4, to: 10, color: "white", zOrder: 1, visible: false, text: "ใส่นม" },
    { key: -29, from: 4, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    { key: -30, from: 4, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },

    //OutSmallConflex Node
    { key: -31, from: 5, to: 3, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -32, from: 5, to: 4, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    { key: -33, from: 5, to: 8, color: "white", zOrder: 1, visible: false, text: "ขนาดใหญ่" },
    {
      key: -34,
      from: 5,
      to: 5,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "คอนเฟรก,ขนาดเล็ก",
    },
    { key: -35, from: 5, to: 11, color: "white", zOrder: 1, visible: false, text: "ใส่นม" },
    { key: -36, from: 5, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -37, from: 5, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },

    //OutLargeBrownie Node
    { key: -38, from: 6, to: 7, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    { key: -39, from: 6, to: 8, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    { key: -40, from: 6, to: 3, color: "white", zOrder: 1, visible: false, text: "ขนาดเล็ก" },
    {
      key: -41,
      from: 6,
      to: 6,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "บราวนี่,ขนาดใหญ่",
    },
    { key: -42, from: 6, to: 12, color: "white", zOrder: 1, visible: false, text: "ใส่นม" },
    { key: -43, from: 6, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -44, from: 6, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },

    //OutLargeBanana Node
    { key: -45, from: 7, to: 6, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -46, from: 7, to: 8, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    { key: -47, from: 7, to: 4, color: "white", zOrder: 1, visible: false, text: "ขนาดเล็ก" },
    { key: -48, from: 7, to: 7, color: "white", zOrder: 1, visible: false, text: "กล้วย,ขนาดใหญ่" },
    { key: -49, from: 7, to: 13, color: "white", zOrder: 1, visible: false, text: "ใส่นม" },
    { key: -50, from: 7, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -51, from: 7, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },

    //OutLargeConflex Node
    { key: -52, from: 8, to: 6, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -53, from: 8, to: 7, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    { key: -54, from: 8, to: 5, color: "white", zOrder: 1, visible: false, text: "ขนาดเล็ก" },
    {
      key: -55,
      from: 8,
      to: 8,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "คอนเฟรก,ขนาดใหญ่",
    },
    { key: -56, from: 8, to: 14, color: "white", zOrder: 1, visible: false, text: "ใส่นม" },
    { key: -57, from: 8, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    { key: -58, from: 8, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },

    //OutSmallBrownieWithMilk Node
    { key: -59, from: 9, to: 3, color: "white", zOrder: 1, visible: false, text: "ไม่ใส่นม" },
    { key: -60, from: 9, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    { key: -61, from: 9, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -62, from: 9, to: 10, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    { key: -63, from: 9, to: 11, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    { key: -64, from: 9, to: 12, color: "white", zOrder: 1, visible: false, text: "ขนาดใหญ่" },
    {
      key: -65,
      from: 9,
      to: 9,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดเล็ก,บราวนี่",
    },

    //OutSmallBananaWithMilk Node
    { key: -66, from: 10, to: 4, color: "white", zOrder: 1, visible: false, text: "ไม่ใส่นม" },
    { key: -67, from: 10, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    { key: -68, from: 10, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -69, from: 10, to: 9, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -70, from: 10, to: 11, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    { key: -71, from: 10, to: 13, color: "white", zOrder: 1, visible: false, text: "ขนาดใหญ่" },
    {
      key: -72,
      from: 10,
      to: 10,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดเล็ก,กล้วย",
    },

    //OutSmallConflexWithMilk Node
    { key: -73, from: 11, to: 5, color: "white", zOrder: 1, visible: false, text: "ไม่ใส่นม" },
    { key: -74, from: 11, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    { key: -75, from: 11, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -76, from: 11, to: 9, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -77, from: 11, to: 10, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    { key: -78, from: 11, to: 14, color: "white", zOrder: 1, visible: false, text: "ขนาดใหญ่" },
    {
      key: -79,
      from: 11,
      to: 11,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดเล็ก,คอนเฟรก",
    },

    //OutLargeBrownieWithMilk Node
    { key: -80, from: 12, to: 6, color: "white", zOrder: 1, visible: false, text: "ไม่ใส่นม" },
    { key: -81, from: 12, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    { key: -82, from: 12, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -83, from: 12, to: 9, color: "white", zOrder: 1, visible: false, text: "ขนาดเล็ก" },
    { key: -84, from: 12, to: 13, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    { key: -85, from: 12, to: 14, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    {
      key: -86,
      from: 12,
      to: 12,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดใหญ่,บราวนี่",
    },

    //OutLargeBananaWithMilk Node
    { key: -87, from: 13, to: 7, color: "white", zOrder: 1, visible: false, text: "ไม่ใส่นม" },
    { key: -88, from: 13, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    { key: -89, from: 13, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -90, from: 13, to: 10, color: "white", zOrder: 1, visible: false, text: "ขนาดเล็ก" },
    { key: -91, from: 13, to: 12, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -92, from: 13, to: 14, color: "white", zOrder: 1, visible: false, text: "คอนเฟรก" },
    {
      key: -93,
      from: 13,
      to: 13,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดใหญ่,กล้วย",
    },

    //OutLargeConflexWithMilk Node 14
    { key: -94, from: 14, to: 8, color: "white", zOrder: 1, visible: false, text: "ไม่ใส่นม" },
    { key: -95, from: 14, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    { key: -96, from: 14, to: 15, color: "white", zOrder: 1, visible: false, text: "สั่งซื้อ" },
    { key: -97, from: 14, to: 11, color: "white", zOrder: 1, visible: false, text: "ขนาดเล็ก" },
    { key: -98, from: 14, to: 12, color: "white", zOrder: 1, visible: false, text: "บราวนี่" },
    { key: -99, from: 14, to: 13, color: "white", zOrder: 1, visible: false, text: "กล้วย" },
    {
      key: -100,
      from: 14,
      to: 14,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดใหญ่,คอนเฟรก",
    },

    //สั่งซื้อ Node
    { key: -101, from: 15, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    {
      key: -102,
      from: 15,
      to: 16,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดเล็ก,ขนาดใหญ่,บราวนี่,กล้วย,คอนเฟรก,ใส่นม,สั่งซื้อ",
    },
    //Trap Node
    { key: -103, from: 16, to: 0, color: "white", zOrder: 1, visible: false, text: "Reset" },
    {
      key: -104,
      from: 16,
      to: 16,
      color: "white",
      zOrder: 1,
      visible: false,
      text: "ขนาดเล็ก,ขนาดใหญ่,บราวนี่,กล้วย,คอนเฟรก,ใส่นม,สั่งซื้อ",
    },
  ],
}
