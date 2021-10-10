// 숫자형 Enumeration
enum NumberUserRole {
    ADMIN,
    STAFF
}

console.log(NumberUserRole.ADMIN) // log = 0

// 문자형 Enumeration
enum StringUserRole {
    ADMIN = 'ADMIN',
    STAFF = 'STAFF'
}

console.log(StringUserRole.ADMIN) // log = ADMIN