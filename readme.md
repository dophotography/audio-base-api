# Smart Home Project - File Hosting Express API Documentation
The Smart Home Project - File Hosting Express API is a backend application built using Express.js that serves files for a Smart Home Project. This API allows you to access files stored in the player directory on the server. It uses the popular Express.js framework to handle HTTP requests and serve the files to clients.

## Installation and Setup
To run the Smart Home Project - File Hosting Express API on your local machine, follow these steps:

1. Clone the repository to your local machine:
````bash
git clone https://github.com/dophotography/audio-base-api.git
````

2. Change your current directory to the project folder:
````bash
cd audio-base-api
````

3. Install the required dependencies using npm:
````bash
npm install
````

4. Start the server:
````bash
npm start
````

The API will start running on http://localhost:3000.

## Endpoints

### GET /player/:fileName

This endpoint allows you to access a specific file in the `player` directory.

Parameters

* `:fileName` (required): The name of the file you want to access.

Response

* If the file exists, the API will respond with the file's contents as an attachment.

Error Handling

* If the file does not exist, the API will respond with a `404 Not Found` status and an error message.

## Example Usage (Locally)

To access a file from the `player` directory, make a GET request to the `/player/:fileName endpoint`, replacing `:fileName` with the name of the file you want to retrieve.

Example usage using cURL:

````bash
curl -OJ http://localhost:3000/player/track1.mp3
````

This will download the `track1.mp3` file from the `player` directory to your current working directory.

## Deployment
The Smart Home Project - File Hosting Express API is designed to be deployed on the Vercel platform. You can deploy the API by pushing changes to the `main` branch. Vercel will automatically build and deploy the changes to the API.