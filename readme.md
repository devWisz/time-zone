Timefy –  Compare global time instantly

Timefy is a lightweight Chrome extension that lets you instantly compare your local time with multiple global time zones. It provides a minimal, clean popup interface for real-time time checks and toggling between 12-hour and 24-hour formats.

Built entirely in-browser using JavaScript’s Internationalization API, it’s fast, responsive, and requires no external dependencies.



Features

Display your current local time

Compare with selected global time zones

Show hour differences between local and selected zones

Toggle between 12-hour and 24-hour formats

Modal view for browsing multiple time zones

Real-time updates every second

Minimal, responsive UI for clean browsing experience

Lightweight – no libraries, no dependencies



Quick Usage

Click the Timefy icon in your Chrome toolbar

View your local time and global comparisons instantly

Click the 12/24-hour toggle to switch formats

Open the modal to explore more world time zones




Installation
1. Direct Installation (Recommended)

Download the latest release from GitHub:
Download Latest Release

Then:

Open Chrome → chrome://extensions/

Enable Developer Mode (top right)

Drag & drop the downloaded folder or click Load unpacked and select the folder

The extension will appear in your toolbar immediately.

2. Developer Mode (Manual Setup)

Clone the repository:

git clone https://github.com/devWisz/time-zone.git


Then:

Open Chrome → chrome://extensions/

Enable Developer Mode

Click Load unpacked → Select the cloned project folder

You can now test and modify the extension locally.

Project Structure
time-zone/
│
├── manifest.json   # Extension configuration
├── popup.html      # Popup interface structure
├── popup.css       # Styles and UI design
├── popup.js        # Time logic and functionality
├── README.md       # Project documentation
└── .gitignore      # Git ignore rules

Updating the Extension

Increase the version in manifest.json

Repack the extension using your .pem key

Push updates:

git add .
git commit -m "Update version"
git push


License

This project is open-source and available for educational and development purposes.