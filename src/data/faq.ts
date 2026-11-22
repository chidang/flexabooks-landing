import { EARLY_BIRD, REFUND_DAYS, TRIAL_DAYS } from './pricing';

export const FAQ = [
  {
    q: `Hết ${TRIAL_DAYS} ngày dùng thử thì sao?`,
    a: `Dữ liệu bạn đã nhập vẫn còn nguyên. Bạn chọn gói và thanh toán để dùng tiếp; chưa mua thì tài khoản tạm dừng ghi sổ, không bị xóa. Dùng thử không cần thẻ nên không có khoản trừ tiền tự động.`,
  },
  {
    q: 'Phần mềm theo chế độ kế toán nào?',
    a: 'Doanh nghiệp nhỏ và vừa theo Thông tư 133/2016 hoặc Thông tư 99/2025; doanh nghiệp siêu nhỏ theo Thông tư 58/2026; hộ, cá nhân kinh doanh theo Thông tư 152/2025. Sổ, báo cáo tài chính và tờ khai in theo mẫu của từng chế độ.',
  },
  {
    q: 'Có phải cài đặt gì không?',
    a: 'Không. Bạn dùng trên trình duyệt của máy tính, điện thoại hoặc máy tính bảng. Bản mới cập nhật tự động.',
  },
  {
    q: 'Dữ liệu của tôi để ở đâu, có an toàn không?',
    a: 'Dữ liệu lưu trên máy chủ và truyền qua kết nối mã hóa (HTTPS). Mỗi người dùng chỉ thấy phần được phân quyền. Cách chúng tôi xử lý dữ liệu cá nhân ghi ở trang Chính sách bảo vệ dữ liệu cá nhân.',
  },
  {
    q: 'Đang dùng phần mềm khác, chuyển sang có khó không?',
    a: 'Bạn xuất sổ nhật ký chung và bảng số dư từ phần mềm cũ ra Excel, phần mềm nhập vào và kiểm tra số liệu trước khi ghi. Gói Doanh nghiệp được hỗ trợ miễn phí; gói Chuyên nghiệp thì chúng tôi làm thay bạn.',
  },
  {
    q: 'Trợ lý AI làm được gì, có tự ghi sổ không?',
    a: 'Trợ lý trả lời câu hỏi về số liệu của công ty, gợi ý định khoản, đọc hóa đơn PDF hay ảnh để điền form, ghép cột sao kê và chỉ ra chỗ sổ có thể sai. Trợ lý không tự ghi sổ: bút toán đề xuất mở ra form chứng từ để bạn kiểm tra và tự bấm lưu.',
  },
  {
    q: 'Hạn mức token của Trợ lý AI tính thế nào?',
    a: 'Token là đơn vị đo lượng chữ trợ lý đọc và viết. Mỗi lần hỏi, phần mềm cộng cả phần câu hỏi, số liệu trợ lý phải đọc và câu trả lời, nên câu hỏi cần đọc nhiều sổ sẽ tốn nhiều token hơn. Hạn mức tính theo tháng dương lịch, đầu tháng tính lại từ đầu. Màn hình Trợ lý AI hiện số token đã dùng và nhắc khi sắp hết.',
  },
  {
    q: 'Dùng hết hạn mức token trong tháng thì sao?',
    a: 'Phần mềm kế toán vẫn chạy đủ. Trợ lý tạm dừng tới đầu tháng sau, hoặc bạn mua thêm token.',
  },
  {
    q: 'Có xuất hóa đơn GTGT cho phí phần mềm không?',
    a: 'Có. Giá trên trang chưa gồm thuế GTGT; chúng tôi xuất hóa đơn điện tử cho mỗi lần thanh toán.',
  },
  {
    q: 'Đổi gói giữa năm được không?',
    a: 'Được. Nâng gói thì trả phần chênh lệch cho số tháng còn lại. Hạ gói áp dụng từ kỳ gia hạn sau.',
  },
  {
    q: 'Tôi làm kế toán dịch vụ cho nhiều công ty thì tính giá thế nào?',
    a: 'Một tài khoản đăng nhập dùng được cho mọi công ty bạn giữ sổ. Từ 3 công ty trở lên có giá riêng: 700.000đ mỗi công ty một năm, từ 10 công ty là 600.000đ, từ 20 công ty là 500.000đ, mỗi công ty đủ tính năng gói Doanh nghiệp. Chi tiết ở mục Kế toán dịch vụ của trang Bảng giá.',
  },
  {
    q: 'Hoàn tiền thế nào?',
    a: `Trong ${REFUND_DAYS} ngày đầu sau khi mua gói lần đầu, bạn báo không muốn dùng tiếp thì chúng tôi hoàn lại số tiền đã trả. Ưu đãi giảm ${EARLY_BIRD.percent}% năm đầu vẫn được hoàn theo số tiền thực trả.`,
  },
];
