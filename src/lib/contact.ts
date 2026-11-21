// Một chỗ cho mọi liên kết ra ngoài của trang. Đổi tên miền app hay số hỗ trợ thì sửa ở đây.
export const APP_URL = 'https://kt.flexa.vn';
export const LOGIN_URL = APP_URL; // màn đăng nhập là trang gốc của app
export const DOCS_URL = 'https://ktdoc.flexa.vn';
export const PRIVACY_URL = `${APP_URL}/privacy`;
export const TERMS_URL = `${APP_URL}/terms`;
export const ZALO_GROUP_URL = 'https://zalo.me/g/qnpvrunuavhpkcsshycg';
export const SUPPORT_PHONE = '0905648626';
export const SUPPORT_PHONE_DISPLAY = '0905 648 626';
export const ZALO_CHAT_URL = `https://zalo.me/${SUPPORT_PHONE}`;

/** Link đăng ký kèm gói và nguồn, để đo lượt bấm theo từng nút. App bỏ qua tham số lạ. */
export function registerUrl(plan: string = 'trial', placement: string = 'landing'): string {
  const params = new URLSearchParams({ plan, utm_source: 'flexabooks.vn', utm_medium: 'landing', utm_campaign: placement });
  return `${APP_URL}/register?${params.toString()}`;
}
