export class Message {
    public static readonly EMPTY_EMAIL_ERROR = "Chưa nhập email";
    public static readonly EMAIL_FORMAT_ERROR = "Email không đúng định dạng";

    public static readonly PASSWORD_FORMAT_ERROR = "Mật khẩu có ít nhất tám ký tự, chữ hoa, chữ thường và ký tự đặc biệt";
    public static readonly CONFIRMED_PASSWORD_FORMAT_ERROR = "Xác nhận mật khẩu có ít nhất tám ký tự, chữ hoa, chữ thường và ký tự đặc biệt";

    public static readonly PASSWORD_NOT_MATCH_ERROR = "Mật khẩu và xác nhận mật khẩu không giống nhau";

    public static readonly PRODUCT_CODE_EMPTY = "Chưa nhập mã sản phẩm";
    public static readonly PRODUCT_NAME_EMPTY = "Chưa nhập tên sản phẩm";
    public static readonly PRODUCT_DESC_EMPTY = "Chưa nhập mô tả sản phẩm";
    public static readonly PRODUCT_PRICE_EMPTY = "Chưa nhập giá bán cho sản phẩm";
    public static readonly PRODUCT_COST_PRICE_EMPTY = "Chưa nhập giá vốn cho sản phẩm";
    public static readonly PRODUCT_AMOUNT_EMPTY = "Chưa nhập số lượng sản phẩm";
    public static readonly PRODUCT_PROFIT_INVALID = "Giá bán phải cao hơn giá nhập tối thiểu là 5000";

    public static readonly CATEGORY_EMPTY = "Chưa chọn danh mục sản phẩm";

    public static readonly SUCCESS = "Thành công";
}

export class Expression {
    public static readonly EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    public static readonly PASSWORD_REGEX = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
}

export class AppSettings {
    public static readonly ALIAS = "alias";
}