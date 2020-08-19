export const getTodos = async () => {
  const response = await fetch("http://localhost:3333/todos");
  if (!response.ok) {
    throw new Error(response);
  }
  const results = await response.json();

  return results;
};

export const createTodo = async (todo) => {
  const response = await fetch("http://localhost:3333/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error(response);
  }

  return response;
};
