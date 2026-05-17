let cinemaSeats = [
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let waitlistArray = ["NguyenVanA", "TranThiB", "LeVanC"];

function bookSeat(row, col) {
    if (row < 0 || row >= cinemaSeats.length) {
        return "Lỗi: Số hàng không tồn tại!";
    }
    if (col < 0 || col >= cinemaSeats[row].length) {
        return "Lỗi: Số cột không tồn tại!";
    }
    if (cinemaSeats[row][col] === 1) {
        return "Thất bại: Ghế tại hàng " + row + ", cột " + col + " đã có người đặt!";
    }
    cinemaSeats[row][col] = 1;
    return "Thành công: Đã đặt ghế tại hàng " + row + ", cột " + col + "!";
}

function addCustomerToWaitlist(name) {
    if (!name || name.trim() === "") {
        return "Lỗi: Tên khách hàng không hợp lệ!";
    }
    waitlistArray.push(name);
    return "Đã thêm " + name + " vào danh sách chờ. Vị trí hiện tại: " + waitlistArray.length;
}

function printCinemaLayout() {
    let layout = "";
    for (let i = 0; i < cinemaSeats.length; i++) {
        for (let j = 0; j < cinemaSeats[i].length; j++) {
            layout += cinemaSeats[i][j] + " ";
        }
        layout += "\n";
    }
    return layout;
}