import json

with open('../scrappers/json/profesorado.json', 'r', encoding='utf-8') as f1, open('../scrappers/json/teachers.json', 'r', encoding='utf-8') as f2:
    data1 = json.load(f1)
    data2 = json.load(f2)

# Merge the two lists into one list
merged_data = data1 + data2

# Remove duplicate items from the merged list using an array
unique_data = list(set(json.dumps(d) for d in merged_data))

# Convert the unique data back to a dictionary
final_data = [json.loads(d) for d in unique_data]

# Write the unique elements to a new JSON file
with open('../scrappers/json/profesorado_combinados.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, indent=4, ensure_ascii=False, sort_keys=True)
