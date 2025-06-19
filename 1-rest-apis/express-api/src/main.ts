import express from 'express';

function main() {
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.get('/:id', async (req, res) => {
    const todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);
    res.json(await todo.json());
  });

  app.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
  });
}

main();
