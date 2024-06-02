# Polling-System-API


Polling API is a web service that allows users to create, manage, and participate in polls. It provides endpoints for creating questions, adding options to questions, voting on options, and viewing poll results.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Endpoints](#endpoints)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
  
## Features
Create questions with multiple options.
Add options to existing questions.
Vote on options.
Delete questions (optional: if no votes are casted on any option).
Delete options (optional: if no votes are casted on the option).
View questions with their options and vote counts.

## Setup

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/polling-api.git
```

2. Navigate to the project directory:

``` bash
cd polling-api
```

3. Install dependencies:

```bash
npm install
```

4. Set up your MongoDB database.

5. Start the server:

```bash
npm start
```

The server should now be running on http://localhost:3000.

## Endpoints

POST /questions/create: Create a new question.
POST /questions/
/options/create: Add options to a specific question.
DELETE /questions/
/delete: Delete a question.
DELETE /options/
/delete: Delete an option.
PUT /options/
/add_vote: Increment the count of votes for an option.
GET /questions/
: View a question and its options.

## Usage

Use POSTMAN or any other API testing tool to make HTTP requests to the API endpoints.
Create a new question using the /questions/create endpoint.
Add options to the question using the /questions/:id/options/create endpoint.
Vote on options using the /options/:id/add_vote endpoint.
View the question and its options along with the vote count using the /questions/:id endpoint.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests. Please follow the Contribution Guidelines for details.

## Customization

The application can be customized by modifying the CSS styles and JavaScript logic. Refer to the code comments for guidance.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Follow the Contributing Guidelines for details.
