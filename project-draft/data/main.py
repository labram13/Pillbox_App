import pandas as pd

def main():
    drugs_csv = pd.read_csv("data/common_drugs.csv")
    drugs_info = pd.read_csv("data/drugs_side_effects_drugs_com.csv")

    drugs_info = drugs_info[['drug_name', 'side_effects', 'brand_names', 'alcohol', 'drug_link']]
    drugs_csv = drugs_csv['Drug Name'].str.lower()
    merged_df = pd.merge(drugs_csv, drugs_info, left_on="Drug Name", right_on="drug_name", how="inner")
    merged_df = merged_df.drop(['Drug Name', merged_df.columns[0]], axis=1)
    # print(merged_df.drug_name.values)
    table = merged_df.to_json()
    # table = merged_df.to_html()
    text_file = open('output.json', "w")
    text_file.write(table)
    text_file.close()    

    # Creates new file. Run only once.
    # merged_df.to_csv('merged_drugs.csv')


if __name__ == '__main__':
    main()