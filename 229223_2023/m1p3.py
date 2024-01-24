#!/usr/bin/env python3
# ชื่อ (ไม่ต้องใส่นามสกุล)
# รหัสนศ
# Sec00x


def main():
    list_a = ['a', 'quick', 'brown', 'fox']
    word_len(list_a)
    assert list_a == [1, 5, 5, 3]

    list_a = ['empty', 'or', '', 'full']
    word_len(list_a)
    assert list_a == [5, 2, 0, 4]

    print("All tests passed!")


def word_len(list_a):
    pass


if __name__ == '__main__':
    main()
