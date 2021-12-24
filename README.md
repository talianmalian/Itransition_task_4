# Rock Paper Scissors based game

## Description 

This CLI application provides a Rock Paper Scissors based game with computer. Rules are defined by user. The current move wins a half moves by the right side and looses a half moves by the left side. The honesty of computer are ensured by HMAC. To check the computer solve sha256 based HMAC from key and computer's move and compare it with the shown one. A table with current game rules can be observed by choosing a help point in menu.


**Node.js is required.**

### How to install?

- clone the repository: 
  ```
  git clone https://github.com/talianmalian/Itransition_task_4.git
  ```
- install dependencies:

```
npm install
```
- open file app.js with arguments
  ```
  node app.js rock paper scissors 
  ```

To play classic game type: 
```
node app.js rock scissors paper
```

### Input restrictions 

1. A number of moves must be odd.
2. A number of moves must be equal or bigger than 3;
3. Moves shouldn't be repeated.