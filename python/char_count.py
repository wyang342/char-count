def char_count(str_to_count):
    str_to_count = str_to_count.replace(" ", "")
    unsorted_dict = {}

    char_list = list(str_to_count)
    for char in char_list:
        if char in unsorted_dict:
            unsorted_dict[char] += 1
        else:
            unsorted_dict[char] = 1

    sorted_dict = dict(sorted(unsorted_dict.items(),
                              key=lambda x: x[1], reverse=True))

    return sorted_dict
