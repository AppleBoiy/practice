#!/usr/bin/env python3
# ชื่อ (ไม่ต้องใส่นามสกุล)
# รหัสนศ
# Sec00x


def main():

    assert is_isosceles(3, 3, 3) == True
    assert is_isosceles(5, 5, 4) == True
    assert is_isosceles(7, 8, 9) == False
    assert is_isosceles(6, 10, 12) == False

    print("All tests passed!")


def is_isosceles(a, b, c):
    return False


if __name__ == '__main__':
    main()
