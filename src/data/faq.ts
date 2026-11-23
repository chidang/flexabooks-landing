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
    a: 'Trợ lý trả lời câu hỏi về số liệu của công ty và cách dùng phần mềm, gợi ý định khoản, đọc hóa đơn PDF hay ảnh để điền form, ghép cột sao kê và chỉ ra chỗ sổ có thể sai. Khi được giao việc, trợ lý lập chứng từ nháp cho dòng sao kê, hóa đơn mua dịch vụ, gắn phiếu đã có vào dòng sao kê và đối trừ công nợ. Trợ lý không tự ghi sổ: bạn kiểm tra rồi tự bấm ghi sổ.',
  },
  {
    q: 'Giao việc cho trợ lý thì kiểm soát thế nào?',
    a: 'Người quản trị hoặc kế toán trưởng bật từng việc, đặt số tiền tối đa và mức chắc chắn tối thiểu. Trợ lý chạy với đúng quyền của người giao việc, không vào kỳ đã khóa sổ. Chứng từ trợ lý lập nằm trên một hàng đợi riêng: bạn ghi sổ, trả lại theo lô, hoặc hoàn tác cả lần chạy khi chứng từ còn là nháp. Phần lớn dòng được quyết theo quy tắc và lịch sử hạch toán của công ty, chỉ dòng khó mới gọi mô hình và tính vào hạn mức token.',
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
    a: 'Một tài khoản đăng nhập dùng được cho mọi công ty bạn giữ sổ. Trang Công ty của tôi liệt kê các công ty, tìm được theo tên hoặc mã số thuế, bấm một lần là chuyển sang công ty khác. Từ 3 công ty trở lên có giá riêng: 700.000đ mỗi công ty một năm, từ 10 công ty là 600.000đ, từ 20 công ty là 500.000đ, mỗi công ty đủ tính năng gói Doanh nghiệp. Chi tiết ở mục Kế toán dịch vụ của trang Bảng giá.',
  },
  {
    q: 'Công ty tôi có mẫu chứng từ, báo cáo riêng, hoặc cần nối với phần mềm đang dùng thì sao?',
    a: 'Chúng tôi nhận chỉnh mẫu chứng từ, mẫu báo cáo quản trị, cách nhập liệu và cách tính theo yêu cầu, làm thêm chức năng riêng, kết nối với phần mềm bán hàng, kho, nhân sự hay ERP công ty đang dùng. Bạn gửi mẫu hoặc mô tả qua Zalo, chúng tôi khảo sát và báo giá miễn phí. Chi tiết ở trang Dịch vụ.',
  },
  {
    q: 'Hoàn tiền thế nào?',
    a: `Trong ${REFUND_DAYS} ngày đầu sau khi mua gói lần đầu, bạn báo không muốn dùng tiếp thì chúng tôi hoàn lại số tiền đã trả. Ưu đãi giảm ${EARLY_BIRD.percent}% năm đầu vẫn được hoàn theo số tiền thực trả.`,
  },
];
