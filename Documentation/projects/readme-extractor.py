import requests

username = "jagratahuja"

repos = [
    "color-palette",
    "python-programs",
    "decision-maker",
    "curiosity-engine",
    "habit-tracker",
    "timescope",
    "studyOS"
]

for repo in repos:
    url = f"https://raw.githubusercontent.com/{username}/{repo}/main/README.md"
    
    try:
        response = requests.get(url)
        
        if response.status_code == 200:
            filename = f"{repo}_README.md"
            with open(filename, "w", encoding="utf-8") as f:
                f.write(response.text)
            print(f"✅ Downloaded: {filename}")
        else:
            print(f"❌ Failed: {repo} (README not found or repo is private)")
    
    except Exception as e:
        print(f"⚠️ Error with {repo}: {e}")