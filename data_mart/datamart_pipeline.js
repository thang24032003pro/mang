const orders = [
    { id: 1, status: "Delivered", price: 100, tax: 10 },
    { id: 2, status: "Cancelled", price: 200, tax: 20 },
    { id: 3, status: "Delivered", price: 300, tax: 30 }
];

function calculateTotalRevenue(orderList) {
    if (!Array.isArray(orderList)) {
        return 0;
    }
    return orderList
        .filter(order => order && order.status === "Delivered" && !isNaN(order.price) && !isNaN(order.tax))
        .map(order => Number(order.price) + Number(order.tax))
        .reduce((acc, currentPrice) => acc + currentPrice, 0);
}

console.log("Total Revenue:", calculateTotalRevenue(orders));