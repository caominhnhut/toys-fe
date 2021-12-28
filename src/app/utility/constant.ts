export class Message {
    public static readonly EMPTY_EMAIL_ERROR = "Chưa nhập email";
    public static readonly EMAIL_FORMAT_ERROR = "Email không đúng định dạng";

    public static readonly PASSWORD_FORMAT_ERROR = "Mật khẩu có ít nhất tám ký tự, chữ hoa, chữ thường và ký tự đặc biệt";
    public static readonly CONFIRMED_PASSWORD_FORMAT_ERROR = "Xác nhận mật khẩu có ít nhất tám ký tự, chữ hoa, chữ thường và ký tự đặc biệt";

    public static readonly PASSWORD_NOT_MATCH_ERROR = "Mật khẩu và xác nhận mật khẩu không giống nhau";
}

export class Expression {
    public static readonly EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    public static readonly PASSWORD_REGEX = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
}