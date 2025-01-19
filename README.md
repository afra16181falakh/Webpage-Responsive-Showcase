This repository includes code for three tasks:
	1.	A responsive webpage with a fixed navbar, collapsible left menu, and responsive design.
	2.	A Django-based chat application with WebSocket functionality.
	3.	AWS Lambda functions for basic arithmetic and file uploads to S3.

Table of Contents

	•	Responsive Webpage
	•	Django Chat Application
	•	AWS Lambda Functions
	•	Deployment

Responsive Webpage

Features

	•	Fixed navbar that remains in place during scrolling.
	•	Responsive layout with left menu (collapsible), main content, and right panel.
	•	Footer at the bottom.
	•	Dynamic resizing with JavaScript based on screen width.

How to Run

	1.	Clone the repository:
git clone https://github.com/your-username/your-repo.git
	2.	Navigate to the folder:
cd responsive-webpage
	3.	Open index.html in any web browser.

Django Chat Application

Features

	•	User authentication (signup/login).
	•	Collapsible menu displaying registered users.
	•	Real-time chat with WebSocket.
	•	Chat messages and user data stored in a database.
	•	Retrieve and display old chat messages upon login.

Setup Instructions

	1.	Navigate to the project directory:
cd chatapp
	2.	Install dependencies:
pip install django channels
	3.	Apply migrations:
python manage.py migrate
	4.	Start the server:
python manage.py runserver
	5.	Access the app at:
http://127.0.0.1:8000

AWS Lambda Functions

Add Two Numbers

A serverless AWS Lambda function that adds two numbers. It’s triggered by an event and scales automatically based on demand, providing a simple solution for on-demand arithmetic operations without managing servers.

File Upload to S3

A Lambda function that processes file uploads and stores them in an S3 bucket. It’s triggered by events (e.g., file uploads) and automatically handles file storage in S3, offering a serverless, scalable solution for file management.

Deployment

Frontend Hosting

	1.	Host HTML, CSS, and JS files on GitHub Pages or any static hosting service.
