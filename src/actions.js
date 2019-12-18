const ADD = "ADD";
const DELETE = "DELETE";

const addOper = (number) => {
  return {
    type: ADD,
    number
  }
}

const deleteOper = () => {
  return {
    type: DELETE,
  }
}

export { addOper, deleteOper };
export { ADD, DELETE };