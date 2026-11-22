// Nguồn duy nhất của giá, gói và ưu đãi cho trang chủ, /bang-gia, /dieu-kien-uu-dai và JSON-LD.
// Giá tính theo năm, cho một công ty (một mã số thuế), chưa gồm thuế GTGT.
//
// CẦN NGƯỜI DÙNG DUYỆT TRƯỚC KHI CÔNG BỐ: ba mức hạn mức Trợ lý AI (`aiTokens`) và hạn của
// ưu đãi khách đăng ký sớm (`EARLY_BIRD`). `aiTokens` là đúng số đặt vào
// ai_company_settings.monthly_token_limit của công ty: phần mềm cộng cả token vào, ra, đọc và ghi cache
// trong tháng dương lịch (Ai::QuotaGuard), nên trang ghi theo token, không quy ra số câu hỏi.
// Bảng giá kế toán dịch vụ (`SERVICE_FIRM_TIERS`) cũng cần người dùng duyệt.

export type PlanId = 'ho-sieu-nho' | 'doanh-nghiep' | 'chuyen-nghiep';

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  pricePerYear: number;
  featured?: boolean;
  audience: string;
  /** null là không giới hạn. */
  users: number | null;
  /** Hạn mức token Trợ lý AI mỗi tháng. */
  aiTokens: number;
  support: string;
  includes: string[];
}

export const TRIAL_DAYS = 30;

export const PLANS: Plan[] = [
  {
    id: 'ho-sieu-nho',
    name: 'Hộ & Siêu nhỏ',
    tagline: 'Cho hộ, cá nhân kinh doanh và doanh nghiệp siêu nhỏ',
    pricePerYear: 1_000_000,
    audience: 'Hộ, cá nhân kinh doanh (Thông tư 152/2025); doanh nghiệp siêu nhỏ (Thông tư 58/2026)',
    users: 3,
    aiTokens: 1_000_000,
    support: 'Zalo, điện thoại, giờ hành chính',
    includes: [
      'Sổ thu chi nhanh: ghi tiền vào, tiền ra, không cần biết định khoản',
      'Sổ S1a đến S3a của hộ kinh doanh, thuế GTGT, thuế TNCN theo kỳ',
      'Sổ S1 đến S4d và báo cáo B01, B02 của doanh nghiệp siêu nhỏ',
      'Hóa đơn mua vào, bán ra; kho hàng; tiền mặt, ngân hàng',
      'Công cụ dụng cụ, tài sản cố định, tiền lương, thuế TNCN',
    ],
  },
  {
    id: 'doanh-nghiep',
    name: 'Doanh nghiệp',
    tagline: 'Đủ phân hệ cho doanh nghiệp nhỏ và vừa',
    pricePerYear: 1_500_000,
    featured: true,
    audience: 'Doanh nghiệp theo Thông tư 133/2016 hoặc Thông tư 99/2025',
    users: 10,
    aiTokens: 2_000_000,
    support: 'Zalo, điện thoại, giờ hành chính',
    includes: [
      'Quỹ, ngân hàng, nhập sao kê Excel, CSV của ngân hàng',
      'Mua hàng, bán hàng, đơn đặt hàng, hợp đồng bán, công nợ',
      'Kho, công cụ dụng cụ, tài sản cố định, tiền lương, thuế TNCN',
      'Báo cáo tài chính, tờ khai 01/GTGT, 03/TNDN; ngoại tệ, tỷ giá',
      'Chuyển dữ liệu từ phần mềm cũ miễn phí',
    ],
  },
  {
    id: 'chuyen-nghiep',
    name: 'Chuyên nghiệp',
    tagline: 'Cho sản xuất, xây lắp và kế toán dịch vụ',
    pricePerYear: 2_000_000,
    audience: 'Doanh nghiệp TT133, TT99 có sản xuất, thi công công trình',
    users: null,
    aiTokens: 5_000_000,
    support: 'Hỗ trợ ưu tiên, cả ngoài giờ; chúng tôi chuyển dữ liệu từ phần mềm cũ cho bạn',
    includes: [
      'Mọi thứ của gói Doanh nghiệp',
      'Giá thành sản xuất, định mức nguyên vật liệu, lệnh sản xuất',
      'Giá thành theo công trình, hạng mục',
      'Rà soát số liệu, sửa sai sót của kế toán cũ',
      'Nhập sổ nhật ký chung từ phần mềm khác',
    ],
  },
];

/** Mọi gói đều có. */
export const ALL_PLANS_INCLUDE = [
  'Không phí khởi tạo',
  'Không giới hạn số chứng từ',
  'Chạy trên trình duyệt, không cài đặt',
  'Cập nhật theo thông tư mới, không tính thêm phí',
  'Xuất Excel, in sổ theo mẫu',
  'Phân quyền theo vai trò',
  'Trợ lý AI tặng kèm mỗi tháng',
  'Hướng dẫn 1:1 trong 30 ngày đầu sau khi mua',
];

/** Mua nhiều năm: trả đủ số năm, được thêm số tháng. */
export const TERMS = [
  { years: 1, bonusMonths: 0, label: '1 năm' },
  { years: 2, bonusMonths: 3, label: '2 năm' },
  { years: 3, bonusMonths: 6, label: '3 năm' },
] as const;

export const EARLY_BIRD = { percent: 30, deadline: '31/03/2027' };
export const REFERRAL_MONTHS = 2;
// Kế toán dịch vụ: một đơn vị mua cho nhiều công ty thì giá mỗi công ty tính theo tổng số công ty
// của đơn. Mỗi công ty dùng đủ tính năng gói Doanh nghiệp (cả hộ kinh doanh, DN siêu nhỏ); công ty
// cần gói Chuyên nghiệp thì giảm `proPercent` trên giá gói đó.
export const SERVICE_FIRM = { fromCompany: 3, proPercent: 20 };
export const SERVICE_FIRM_TIERS = [
  { from: 3, to: 9, pricePerYear: 700_000 },
  { from: 10, to: 19, pricePerYear: 600_000 },
  { from: 20, to: null, pricePerYear: 500_000 },
] as const;
export const REFUND_DAYS = 30;

export const OFFERS = [
  { title: `Dùng thử ${TRIAL_DAYS} ngày`, body: 'Đủ tính năng của gói Chuyên nghiệp, không cần thẻ. Mua gói thì giữ nguyên dữ liệu đã nhập.' },
  { title: '0đ phí khởi tạo', body: 'Không thu phí cài đặt, phí mở tài khoản hay phí khai báo ban đầu.' },
  { title: `Giảm ${EARLY_BIRD.percent}% năm đầu`, body: `Cho khách đăng ký và mua gói trước ngày ${EARLY_BIRD.deadline}.` },
  { title: 'Mua dài, tặng thêm tháng', body: 'Mua 2 năm tặng 3 tháng, mua 3 năm tặng 6 tháng.' },
  { title: `Giới thiệu được ${REFERRAL_MONTHS} tháng`, body: `Bạn và người được giới thiệu mỗi bên được thêm ${REFERRAL_MONTHS} tháng khi người đó mua gói.` },
  { title: 'Giá riêng cho kế toán dịch vụ', body: `Từ ${SERVICE_FIRM.fromCompany} công ty, mỗi công ty chỉ từ ${(SERVICE_FIRM_TIERS[SERVICE_FIRM_TIERS.length - 1].pricePerYear).toLocaleString('vi-VN')}đ một năm, đủ tính năng gói Doanh nghiệp.` },
  { title: 'Chuyển dữ liệu miễn phí', body: 'Gói Doanh nghiệp trở lên: mang số dư và sổ nhật ký chung từ phần mềm cũ sang.' },
  { title: `Hoàn tiền trong ${REFUND_DAYS} ngày`, body: `Không hài lòng trong ${REFUND_DAYS} ngày đầu sau khi mua thì hoàn lại tiền.` },
];

/** null → "Không giới hạn". */
export const formatUsers = (n: number | null) => (n === null ? 'Không giới hạn' : String(n));

/** Khoảng số công ty của một bậc giá kế toán dịch vụ: "3 đến 9 công ty", "Từ 20 công ty". */
export const tierLabel = (t: { from: number; to: number | null }) =>
  t.to === null ? `Từ ${t.from} công ty` : `${t.from} đến ${t.to} công ty`;

export const formatVnd = (n: number) => `${n.toLocaleString('vi-VN')}đ`;

/** Giá quy ra tháng, làm tròn tới nghìn đồng, tính cả tháng tặng. */
export function monthlyPrice(plan: Plan, years = 1, bonusMonths = 0): number {
  return Math.round((plan.pricePerYear * years) / (years * 12 + bonusMonths) / 1000) * 1000;
}

/** 1_000_000 → "1 triệu token", 2_500_000 → "2,5 triệu token". */
export function formatTokens(n: number): string {
  return `${(n / 1_000_000).toLocaleString('vi-VN', { maximumFractionDigits: 1 })} triệu token`;
}
