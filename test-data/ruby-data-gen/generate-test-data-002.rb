require 'json'

def frand (min, max)
    rand * (max-min) + min
end

names = Array.new
File.open('random-company-names.txt').each { |line| names << line }

words = Array.new
File.open('random-words.txt').each { |line| words << line }

data = {
    "rows" => []
}

rows = data["rows"]
used_parents = []

for i in 1..50 do  
  name_index = rand(names.length)
  company = names[name_index]
  
  if used_parents.include? company
    next
  else
    used_parents << company
  end

  used_children = []

  inner_rows = []

  for j in 1..rand(50) do
    child_index = rand(words.length)
    child = words[child_index]

    if used_children.include? child
      next
    else
      used_children << child
    end

    innermost_data = Hash.new
    innermost_data["Name"] = child
    innermost_data["Count of Balloons"] = rand(3..1032)
    innermost_data["Percent Happy"] = frand(0, 1)
    innermost_data["Avg Cost per Balloon"] = frand( 0.001, 0.1 )
    innermost_data["Total Balloon Cost"] = innermost_data["Count of Balloons"] * innermost_data["Avg Cost per Balloon"]
    inner_rows << innermost_data
  end

  outer_row_hash = Hash.new
  outer_row_hash["Balloon Distributor"] = company
  outer_row_hash["Children"] = inner_rows
  
  rows << outer_row_hash

end

my_json = JSON.generate(data)

puts my_json