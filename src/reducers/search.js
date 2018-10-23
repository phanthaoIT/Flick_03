const search = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH':
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      default:
        return state
    }
  }
  ​
  export default todos