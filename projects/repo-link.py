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

filename = "repo-links.md"

with open(filename, "w", encoding="utf-8") as f:
    f.write("# My GitHub Repositories\n\n")
    
    for repo in repos:
        url = f"https://github.com/{username}/{repo}"
        f.write(f"- [{repo}]({url})\n")

print(f"✅ File '{filename}' created successfully!")