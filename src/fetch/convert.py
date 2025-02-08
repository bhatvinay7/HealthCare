import json

# Load the JSON file
with open("JsonData.json", "r", encoding="utf-8") as file:
    doctors = json.load(file)

# URL to update
male_image_url = "https://res.cloudinary.com/dhfyav4og/image/upload/v1738163295/doctor_icon_xu6pgu.png"
female_image_url="https://res.cloudinary.com/dhfyav4og/image/upload/v1738163291/female_doctor_icon_oy1ler.jpg"
# Update the image for male doctors
for doctor in doctors:
    if doctor["gender"] == "Male":
        doctor["doctor_image"] = male_image_url
    else:
        doctor["doctor_image"]=female_image_url
# Save the updated JSON file
with open("doctors_profiles_updated.json", "w", encoding="utf-8") as file:
    json.dump(doctors, file, indent=4, ensure_ascii=False)

print("Updated JSON file saved as doctors_profiles_updated.json")
