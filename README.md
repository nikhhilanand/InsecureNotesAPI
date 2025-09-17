#Sample Vulnerable API Project

#PROJECT STRUCTURE
InsecureNotesAPI/
├── app.js
├── routes/
│   └── notes.js
├── db.js
├── package.json
└── README.md

#TECH STACK
Language: Node.js
Framework: Express
Vulnerabilities: Hardcoded secrets, SQL injection, insecure endpoints

#What This Setup Demonstrates
* Hardcoded credentials in db.js
* SQL injection in notes.js
* Unvalidated input in route handling

* Automated Checkmarx scan triggered on every push to main
