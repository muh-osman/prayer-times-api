async function getUser() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getUser()