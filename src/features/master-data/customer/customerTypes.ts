export interface Customer {
  // Thông tin chung
  customerCode: string; // Mã KH *
  cifCode: string; // Mã CIF *
  customerName: string; // Tên khách hàng *
  email: string; // Email *
  phone: string; // Điện thoại *
  customerGroup?: string; // Nhóm khách hàng
  dateOfBirth?: string; // Ngày sinh (ISO string, date)
  gender?: string; // Giới tính
  nationality?: string; // Quốc tịch
  identityType?: string; // Loại giấy tờ tùy thân
  identityNumber?: string; // Số giấy tờ tùy thân
  dateOfIssue?: string; // Ngày cấp (ISO string, date)
  placeOfIssue?: string; // Nơi cấp
  issuingAuthority?: string; // Cơ quan cấp
  expiryDate?: string; // Ngày hết hạn (ISO string, date)
  registrationBranch?: string; // Kênh đăng ký
  status?: string; // Trạng thái
  taxCode?: string; // Mã số thuế

  // Thông tin liên hệ
  province?: string; // Tỉnh/Thành phố *
  district?: string; // Quận/Huyện/Xã/Phường *
  ward?: string; // Xã/Phường
  hamlet?: string; // Tổ dân phố
  houseNumber?: string; // Số nhà
  addressDetail?: string; // Địa chỉ chi tiết *
}
