cadena = "11--"

array = cadena.split("")
array2 = []

if array.empty?
    puts "Error: -1"
    exit
else array.each do |x|

    if x >="0" && x <="9"
        array2.push(x.to_i)
    elsif x == "+"
        if array2.length < 2
            puts "Error: -1"
            exit
        end
        sum = 0
        array2.last(2).each do |y|
            sum += y
        end
        array2.pop(2)
        array2.push(sum)
    elsif x == "-"
        if array2.length < 2
            puts "Error: -1"
            exit
        end        
        res = 0
        array2.last(2).each do |y|
            res = y - res
        end
        if res < 0
            puts "Error: -1"
            exit
        end
        array2.pop(2)
        array2.push(res) 
    elsif x == "*"
        if array2.length < 2
            puts "Error: -1"
            exit
        end
        prod = 1
        array2.last(2).each do |y|
            prod *= y
        end
        array2.pop(2)
        array2.push(prod)
    elsif x == "/"
        if array2.length < 2
            puts "Error: -1"
            exit
        end
        div = 1
        array2.last(2).each do |y|
            if y == 0
                puts "Error: -1"
                exit
            end
            div = y / div
        end
    end

end
end

puts "Array2: #{array2.last()}"