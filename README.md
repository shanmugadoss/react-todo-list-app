# React Todo List Application

This is a simple Todo List application built using React. The app allows users to add new tasks, mark tasks as completed using checkboxes, and remove tasks from the list. It uses Bootstrap for styling and has a clean and responsive UI.

## Features

- **Add New Todo Items**: Users can input new tasks and add them to the todo list.
- **Mark Tasks as Complete**: Users can check or uncheck tasks to mark them as completed or pending.
- **Remove Todo Items**: Each task has a remove button that allows users to delete the task from the list.
- **Real-time UI Updates**: The list updates dynamically as tasks are added, removed, or marked as complete.

## Project Structure

- **`App.js`**: The main component that holds the state and renders the todo list and input components.
- **`ListItems.js`**: The component responsible for rendering the list of todo items. Each item includes a checkbox and a remove button.
- **`AddItem.js`**: The component that contains the input field and a button to add new items to the list.
- **CSS**: Custom styles are applied via `App.css`, and Bootstrap is used for layout and component styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-todo-list.git
   ```

2. Navigate into the project directory:
   ```bash
   cd react-todo-list
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app will now be running at `http://localhost:3000/`.

## Usage

- Type a new task into the input field at the top of the page.
- Click "Add" or press Enter to add the task to the list.
- Click the checkbox to mark tasks as completed or pending.
- Click the "Remove" button to delete a task from the list.

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces.
- **Bootstrap**: Framework for responsive design and styling.
- **JavaScript**: Logic for managing state and event handling.
- **CSS**: Custom styling for additional design features.

