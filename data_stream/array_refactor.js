const rawUsers = [
    { id: 1, name: "Alice", role: "VIP", email: "alice@mail.com", totalSpent: 500 },
    { id: 2, name: "Bob", role: "MEMBER", email: "bob@mail.com", totalSpent: 120 },
    { id: 3, name: "Charlie", role: "VIP", email: "charlie@mail.com", totalSpent: 800 },
    { id: 4, name: "David", role: "GUEST", email: "david@mail.com", totalSpent: 50 }
];

const modernVipEmails = rawUsers
    .filter(user => user && user.role === "VIP" && user.email)
    .map(user => user.email);

const modernTotalRevenue = rawUsers
    .filter(user => user && user.role === "VIP" && !isNaN(user.totalSpent))
    .reduce((acc, user) => acc + Number(user.totalSpent), 0);

console.log("Emails:", modernVipEmails);
console.log("Total Revenue:", modernTotalRevenue);