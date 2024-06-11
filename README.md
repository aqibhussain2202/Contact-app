#Contact App

This is a simple contact application built with Firebase. Follow the instructions below to clone and set it up.

##Features
Add new contacts
Delete existing contacts
Update contact information
Retrieve and display all contacts

Getting Started
###Prerequisites

Node.js and npm installed on your machine.
A Firebase account.
Cloning the Repository
First, clone the repository to your local machine:


git clone https://github.com/aqibhussain2202/contact-app.git
cd contact-app
Setting Up Firebase
Create a Firebase Project:

Go to the Firebase Console.
Click on "Add project".
Enter your project name: vite-contact.
Turn off Google Analytics (optional) and click Continue.
Register your App:

Click on the web icon (</>).
Register the app with the name vite-contact.
Click Register app.
Add Firebase SDK:

You will see const firebaseConfig = {...};.
Copy this configuration.
Configure Firebase in your Project:

In the cloned repository, there is  a file firebase.js in the config directory.
Paste the firebaseConfig object into firebase.js.


its look like:=

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// firebase.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

Setup Firebase Database:

Go to the Firebase Console.
Click on "Build" in the sidebar, then "Realtime Database".
Click Create Database.
Select Start in test mode and choose the Mumbai server.
Click Enable.
Create a Collection:

Click on "Start Collection".
Set the document parent path as contacts.
Add two fields:
name (type: string)
email (type: string)
Add a sample document to get started.
Running the Project
Install the necessary dependencies:

npm install
Start the development server:

npm run dev
The application should now be running at http://localhost:3000.
