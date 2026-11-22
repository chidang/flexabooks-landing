// Dịch vụ làm theo yêu cầu (trang /dich-vu và khối giới thiệu ở trang chủ). Giá báo theo từng việc
// sau khi khảo sát, nên ở đây không có số tiền.
export const SERVICES = [
  {
    id: 'chinh-sua',
    title: 'Chỉnh sửa theo yêu cầu',
    lead: 'Phần mềm theo cách công ty bạn đang làm, không bắt bạn đổi cách làm.',
    items: [
      { t: 'Mẫu chứng từ', b: 'Phiếu thu, phiếu chi, phiếu nhập, phiếu xuất, bảng kê in theo mẫu riêng của công ty: logo, bố cục, thêm hay bớt cột, chữ ký.' },
      { t: 'Mẫu báo cáo', b: 'Báo cáo quản trị theo đúng bảng Excel ban giám đốc đang đọc: doanh thu theo kênh, chi phí theo bộ phận, lãi lỗ theo dự án.' },
      { t: 'Nhập liệu', b: 'Nhập từ tệp Excel theo khuôn bạn đang dùng, màn nhập nhanh cho nghiệp vụ lặp lại, ô mặc định theo thói quen của kế toán.' },
      { t: 'Tính toán', b: 'Công thức riêng: phân bổ chi phí, hoa hồng bán hàng, lương theo quy chế, giá vốn theo cách tính của doanh nghiệp.' },
    ],
  },
  {
    id: 'chuc-nang',
    title: 'Thêm chức năng',
    lead: 'Nghiệp vụ đặc thù chưa có sẵn thì làm thêm, chạy ngay trong FlexaBooks.',
    items: [
      { t: 'Phân hệ riêng', b: 'Quản lý hợp đồng, theo dõi dự án, đặt hàng, bảo hành hay bất kỳ quy trình nào gắn với số liệu kế toán.' },
      { t: 'Quy trình duyệt', b: 'Đề nghị thanh toán, đề nghị tạm ứng, duyệt nhiều cấp trước khi kế toán lập chứng từ.' },
      { t: 'Cảnh báo và nhắc việc', b: 'Nhắc hạn thanh toán, tồn kho dưới mức tối thiểu, chi phí vượt kế hoạch.' },
    ],
  },
  {
    id: 'ket-noi',
    title: 'Kết nối hệ thống hiện có',
    lead: 'Số liệu từ phần mềm khác của công ty tự về sổ kế toán, kế toán không phải gõ lại.',
    items: [
      { t: 'Bán hàng, cửa hàng', b: 'Đơn hàng, hóa đơn, thu tiền từ phần mềm bán hàng hoặc website bán hàng.' },
      { t: 'Kho, sản xuất, nhân sự', b: 'Phiếu nhập xuất từ hệ thống kho, lệnh sản xuất, bảng chấm công cho tính lương.' },
      { t: 'ERP và hệ thống nội bộ', b: 'Trao đổi danh mục, chứng từ, số dư hai chiều với hệ thống công ty đang chạy.' },
    ],
  },
] as const;

export const SERVICE_STEPS = [
  { t: 'Trao đổi yêu cầu', b: 'Bạn gửi mẫu đang dùng, mô tả cách làm hiện tại qua Zalo hoặc điện thoại.' },
  { t: 'Khảo sát và báo giá', b: 'Chúng tôi xem dữ liệu, đề xuất cách làm, báo giá và thời gian. Khảo sát không mất phí.' },
  { t: 'Làm và nghiệm thu', b: 'Bạn dùng thử trên dữ liệu mẫu, góp ý, chúng tôi sửa đến khi đúng yêu cầu đã chốt.' },
  { t: 'Đưa vào dùng', b: 'Bật cho công ty của bạn, hướng dẫn người dùng, sửa lỗi trong thời hạn bảo hành ghi ở báo giá.' },
];
