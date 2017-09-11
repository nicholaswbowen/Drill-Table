require 'json'

names = Array.new
File.open('random-company-names.txt').each { |line| names << line }

data = {
    "rows" => Hash.new
}

rows = data[0]
used_names = []

for i in 1..50 do  
  name_index = rand(names.length)
  company = names[name_index]
  
  if used_names.include? company
    next
  else
    used_names << company
  end

  puts company
end