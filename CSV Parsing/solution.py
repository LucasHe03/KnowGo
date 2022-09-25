import csv

f = open("CSV Parsing/scriptLists.txt", "a")

f.write("const crime_data = [")
with open('CSV Parsing/houston_crime_v2.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            # print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
            if row[1] != "" and row[2] != "":
                f.write(f"\n{{\n    latitude: {row[1]},  \n    longitude: {row[2]}, \n    weight: 1, \n}},")
            line_count += 1
    f.write("\n];")
    print(f'Processed {line_count} lines.')