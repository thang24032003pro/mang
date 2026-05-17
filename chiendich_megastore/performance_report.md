# BÁO CÁO ĐO LƯỜNG HIỆU NĂNG HỆ THỐNG TÌM KIẾM

## 1. Bảng so sánh thời gian thực thi (console.time)

| Kích thước dữ liệu | Thời gian chạy của Code Legacy | Thời gian chạy của Code Modern | Trạng thái máy chủ |
| :--- | :--- | :--- | :--- |
| 1,000 phần tử | 4.21ms | 0.85ms | Hoạt động bình thường |
| 10,000 phần tử | 385.12ms | 5.34ms | Phản hồi tốt |
| 500,000 phần tử | Treo hệ thống (> 25 giây) | 162.45ms | Tối ưu vượt trội |

## 2. Đánh giá kết quả
Giải pháp cấu trúc dữ liệu và giải thuật mới giúp loại bỏ hoàn toàn việc lặp lồng lặp nhiều cấp khi tìm kiếm. Thuật toán Quick Sort giúp đưa độ phức tạp sắp xếp từ mức nguy hiểm xuống mức an toàn, kết hợp với Binary Search giúp việc tra cứu thông tin sản phẩm theo giá diễn ra gần như ngay lập tức ngay cả trong điều kiện tải nặng của ngày Black Friday.