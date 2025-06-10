
def longest_palindrome(s)

    mas_largo = ""


    s.length.times do |i|
        (i).upto(s.length) do |j|
            sub = s[i...j]
            if sub == sub.reverse && sub.length > mas_largo.length
                mas_largo = sub
            end
        end
    end

    puts mas_largo

end



s = "asdfsadfasdfiiidl"
longest_palindrome(s)