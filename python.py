import re

# Load the TypeScript file
file_path = "public/data/anatomyAndPhysiologyIICourse.ts"

# Read the file content
with open(file_path, 'r') as file:
    file_content = file.read()

# Use regex to find and replace the question objects within categories
def add_category_to_questions(content):
    pattern = re.compile(r'categoryName: "(.*?)",\s*questions: \[(.*?)\]', re.DOTALL)
    updated_content = content

    for match in pattern.finditer(content):
        category_name = match.group(1)
        questions_block = match.group(2)
        
        # Add the category property to each question in the questions block
        updated_questions_block = re.sub(
            r'{\s*question:',
            f'{{\n  category: "{category_name}",\n  question:',
            questions_block
        )

        # Replace the original questions block with the updated one
        updated_content = updated_content.replace(questions_block, updated_questions_block)

    return updated_content

# Add the category to each question in the file
updated_file_content = add_category_to_questions(file_content)

# Save the updated content to a new file
updated_file_path = "public/data/anatomyAndPhysiologyIICourse_updated.ts"
with open(updated_file_path, 'w') as updated_file:
    updated_file.write(updated_file_content)

print(f"Updated file saved to: {updated_file_path}")
