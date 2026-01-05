
import os
import random
import openai
import sys

# --- INSTRUCTIONS ---
# 1. Make sure you have the OpenAI library installed: pip install openai
# 2. Set your OpenAI API key as an environment variable named OPENAI_API_KEY.
#    You can do this by running the following command in your terminal:
#    export OPENAI_API_KEY='your-api-key-here'
# 3. Run the script from your terminal:
#    python content_cloner.py <category>
#    Example: python content_cloner.py quick_tips
# ---

# The user's "One Big Message"
ONE_BIG_MESSAGE = "Local businesses need to have a presence on social media. And local businesses are not content creators, and they don't have the same budgets that equity-backed franchises and corporate stores have. So they need Glow Social."

def get_random_template(category):
    """
    Gets a random template from the specified category.
    """
    template_dir = os.path.join("/Users/kathleencelmins/Documents/projects/PAI/marketing/swipe_file", category)
    if not os.path.isdir(template_dir):
        return None, f"Error: Directory not found at '{template_dir}'"
    
    templates = os.listdir(template_dir)
    if not templates:
        return None, f"Error: No templates found in '{template_dir}'"
    
    random_template = random.choice(templates)
    try:
        with open(os.path.join(template_dir, random_template), "r") as f:
            return f.read(), None
    except Exception as e:
        return None, f"Error reading template file: {e}"


def generate_post(category):
    """
    Generates a new post based on a random template from the specified category.
    """
    template, error = get_random_template(category)
    if error:
        return error

    prompt = f"""
    You are a social media expert for local businesses. Your 'One Big Message' is: '{ONE_BIG_MESSAGE}'

    Based on this message and the following template, generate a new, unique social media post. 
    Keep the tone helpful and encouraging.

    Template:
    ---
    {template}
    ---

    New Post:
    """

    try:
        client = openai.OpenAI()
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150,
            n=1,
            stop=None,
            temperature=0.7,
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"An error occurred with the OpenAI API: {e}"

if __name__ == "__main__":
    if "OPENAI_API_KEY" not in os.environ:
        print("Error: Please set your OPENAI_API_KEY environment variable.")
        sys.exit(1)

    if len(sys.argv) != 2:
        print("Usage: python content_cloner.py <category>")
        print("Available categories: quick_tips, community_questions, myth_vs_fact")
        sys.exit(1)

    category = sys.argv[1]
    new_post = generate_post(category)
    print(new_post)
