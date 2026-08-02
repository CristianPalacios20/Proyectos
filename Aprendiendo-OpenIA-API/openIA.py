from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-5.4-mini", 
    input="Puedes degenerar imagen?"

)

print(response.output_text)
