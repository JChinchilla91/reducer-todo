export const initialTodoState ={
    todos: [
        {
        task: 'Do the dishes',
        id: 1520393,
        completed: false
        },
        {
        task: 'Paint garage floor, checkered',
        id: 120021,
        completed: false
        },
        {
        task: 'Vacuum the dog',
        id: 12093120,
        completed: false
        },
        {
        task: 'Clean out the toaster and eat the crumbs',
        id: 1293012,
        completed: false
        },
        {
        task: 'Drink the gutter rain juice',
        id: 19283,
        completed: false
        },
        {
        task: 'Grind all the leaves from the tree',
        id: 9128782,
        completed: false
        },
        {
        task: 'Churn some butter',
        id: 8126772,
        completed: false
        },
        {
        task: 'Turn the TV upside down',
        id: 912723,
        completed: false
        }
    ]
}

  export const todoReducer = function reducer(state, action) {
      switch (action.type) {
          case 'ADD_TODO':
              return {...state, todos: [...state.todos, {task: action.payload, completed: false, id: Date.now()}] }
          case 'TOGGLE_DONE':
              return {...state, todos: state.todos.map(todo => {
                  if (todo.id === action.payload) {
                      return {
                          ...todo,
                          completed: !todo.completed
                      };
                  } else {
                      return todo;
                  }
              })
            }
          case 'CLEAR_COMPLETED':
              return {...state, todos: state.todos.filter(todo => !todo.completed)}
          default:
              return state
        }
  };