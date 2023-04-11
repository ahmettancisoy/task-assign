# task-assign
Develop a web application that will retrieve to-do job information from two different providers and share it weekly with the development team and display its output on the screen. Each provider service provides task name, time (in hours), and difficulty level. There are a total of 5 developers, and the amount of work that each developer can do in 1 hour is given as follows:

| Dev1 | Dev2 | Dev3 | Dev4 | Dev5 |
|------|------|------|------|------|
|  1h  |  1h  |  1h  |  1h  |  1h  |
|  1x  |  2x  |  3x  |  4x  |  5x  |

Assuming that developers work 45 hours a week, a user interface should be prepared that displays the weekly developer-based work program and the minimum total number of weeks required for the work to be completed with an algorithm that ensures the work is completed in the shortest possible time.
## Conditions
- The application should be developed using NodeJS with EJS templating engine.
- Job lists will be retrieved from two different APIs that provide to-do lists (you can find mock server responses below).
- The services that provide the job list should be developed using Design Patterns so that if a 3rd job list API (Provider 3) needs to be added later, it can be done only by introducing a new API.
- A command (console) should be written to retrieve this data from the APIs and store it in the database. The main page should retrieve the data from the database and display the planning result. Bootstrap and Jquery, etc. can be used in the frontend if needed.
- It is preferred to use patterns such as Facade, Factory, Proxy, Strategy, or Adapter in the backend service.

## Providers
- [Provider 1 [TR]](http://www.mocky.io/v2/5d47f24c330000623fa3ebfa)
- [Provider 2 [EN]](http://www.mocky.io/v2/5d47f235330000623fa3ebf7)

## Installation
> 🚧 You will need [Nodejs +16 (LTS recommended)](https://nodejs.org/en/) installed.

1. Clone the repository.
```
git clone https://github.com/vaycomolokko/task-assign.git
```
2. Install dependencies
```
npm install
```

3. Ready to run!
