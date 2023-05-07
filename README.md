# Task Manager

The purpose of this task is to create a simple to-do application that lists todos for a user.

### What needs to be done

You need to create a simple `/todos` page. The page will have

1. An input field to input user id.
2. List of todos for that user.
3. Some identification whether the todo is completed or not. 

**Note**
- Initially, the list of todos will be empty.
- Once we input the user ID and press enter, the list should populate.
- The todos with completed as `yes` should have "✓" against it.

You will use the 3rd party API(details below) to fetch and filter the list of todo. Here is a typical todo payload.

```json
{
    "userId": user id,
    "id": todo id,
    "title": description of the todo,
    "completed": yes/no
},
```

- `List of todos` : https://jsonplaceholder.typicode.com/todos
- `Todo data` : https://jsonplaceholder.typicode.com/todos/1

The attachment has a boilerplate react js code which you can use as a starting point. Please stick to the same project structure.


Once the assignment is ready:
- Add the code to your personal Github account.
- Reply to the email with the link to your Github repository & your contact details.
- We will evaluate the submission & schedule the next round.



