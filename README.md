# URL Shortener API

A modern URL shortening service built with Node.js, Express, and MongoDB. This service allows you to create shortened versions of long URLs, making them easier to share and manage.

## Features

- Create shortened URLs
- Retrieve original URLs using short codes
- Track URL views
- RESTful API design
- MongoDB database for URL storage
- CORS enabled for cross-origin requests
- Request logging with Morgan

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd indolike_URLShortener
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the environment variables in `.env`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/short-url
```

## Running the Application

### Development Mode

```bash
npm run dev
```

This will start the server with nodemon for automatic reloading during development.

### Production Mode

```bash
npm start
```

The server will start on the configured port (default: 5000).

## API Endpoints

### Create Short URL

- **POST** `/api/url/`
- **Body**:

```json
{
  "url": "https://example.com/very/long/url"
}
```

- **Response**:

```json
{
  "id": "xyz123"
}
```

### Get Original URL

- **GET** `/api/url/:shortId`
- Redirects to the original URL for the given short code

### Get Analytics

- **GET** `/api/url/analytics/:shortId`
- Returns the click statistics for the given short code

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Dependencies**:
  - cors: Cross-Origin Resource Sharing
  - dotenv: Environment variable management
  - express: Web framework
  - mongoose: MongoDB ODM
  - morgan: HTTP request logger
  - shortid: Short unique ID generation

## Error Handling

The API includes proper error handling for:

- Invalid URLs
- Not found URLs
- Server errors
- Database connection issues

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the ISC License.
