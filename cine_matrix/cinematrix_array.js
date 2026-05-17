const ticketPrices = [50000, 90000, 120000];

let seatMap = [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
];

function bookSeat(row, col, ticketTypeIndex) {
    if (row < 0 || row >= seatMap.length) {
        return "Lỗi: Hàng ghế không tồn tại trên hệ thống!";
    }
    if (col < 0 || col >= seatMap[row].length) {
        return "Lỗi: Cột ghế không tồn tại trên hệ thống!";
    }
    if (ticketTypeIndex < 0 || ticketTypeIndex >= ticketPrices.length) {
        return "Lỗi: Loại vé không hợp lệ!";
    }
    if (seatMap[row][col] === 1) {
        return "Thất bại: Ghế tại vị trí [" + row + "][" + col + "] đã có người đặt!";
    }
    seatMap[row][col] = 1;
    return "Đặt ghế [" + row + "][" + col + "] thành công! Giá vé: " + ticketPrices[ticketTypeIndex] + " VND.";
}

function printSeatLayout() {
    let layout = "";
    for (let i = 0; i < seatMap.length; i++) {
        for (let j = 0; j < seatMap[i].length; j++) {
            layout += seatMap[i][j] + " ";
        }
        layout += "\n";
    }
    console.log(layout);
}