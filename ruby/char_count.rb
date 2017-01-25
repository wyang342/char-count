def char_count(str)
  counted = str.downcase.scan(/\w/).inject(Hash.new(0)){|h, c| h[c] += 1; h}.sort_by {|l, c| c}.reverse
  return Hash[*counted.flatten(1)]
end
