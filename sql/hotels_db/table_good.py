import os
import csv
import datetime
import uuid

source_dir = '.'  # current directory
encoding_from = 'windows-1252'
encoding_to = 'utf-8'
default_date = '2000-01-01'

def excel_date_to_str(excel_serial):
    try:
        base_date = datetime.datetime(1899, 12, 30)
        date = base_date + datetime.timedelta(days=int(float(excel_serial)))
        return date.strftime('%Y-%m-%d')
    except:
        return default_date  # Fallback for invalid input

for filename in os.listdir(source_dir):
    if filename.endswith('.csv') and 'utf8' not in filename:
        source_path = os.path.join(source_dir, filename)
        target_path = source_path.replace('.csv', '_utf8.csv')

        try:
            with open(source_path, 'r', encoding=encoding_from, errors='ignore') as src_file, \
                 open(target_path, 'w', encoding=encoding_to, newline='') as tgt_file:

                reader = csv.DictReader(src_file)
                fieldnames = reader.fieldnames

                # If id column doesn't exist, add it
                if 'id' not in fieldnames:
                    fieldnames.append('id')

                writer = csv.DictWriter(tgt_file, fieldnames=fieldnames)
                writer.writeheader()

                for row in reader:
                    for col in ['checkInDate', 'checkOutDate', 'checkindate', 'checkoutdate']:
                        if col in row:
                            row[col] = excel_date_to_str(row[col])

                    # Add or fix 'id'
                    if not row.get('id') or row['id'].strip() == '':
                        row['id'] = str(uuid.uuid4())

                    writer.writerow(row)

            print(f"✅ Converted {filename} ➜ {os.path.basename(target_path)}")

        except Exception as e:
            print(f"❌ Failed to convert {filename}: {e}")
