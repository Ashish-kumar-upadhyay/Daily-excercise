# Todo API

A RESTful API for managing todo items with CRUD operations.

## Features

- Create, read, update, and delete todos
- Filter todos by status
- Pagination support
- Sort by creation date
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todo-api
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Create a Todo
- **POST** `/api/todos`
- Request body:
  ```json
  {
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "status": "pending"
  }
  ```

### Get All Todos
- **GET** `/api/todos`
- Optional query parameters:
  - `status`: Filter by status (pending/completed)
  - `page`: Page number (default: 1)
  - `limit`: Items per page (default: 10)

### Get Single Todo
- **GET** `/api/todos/:id`

### Update Todo
- **PUT** `/api/todos/:id`
- Request body:
  ```json
  {
    "title": "Updated title",
    "description": "Updated description",
    "status": "completed"
  }
  ```

### Delete Todo
- **DELETE** `/api/todos/:id`

## Testing

You can test the API using tools like Postman or cURL. 