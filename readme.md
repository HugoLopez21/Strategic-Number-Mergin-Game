# Strategic Number Merging Game

Game devolped as a project in kocaeli university (Turkey)

Strategic Number Merging Game is a fast-paced mobile puzzle game inspired by classic number-matching and falling-block mechanics. The player must carefully select connected number tiles on a board and match their total to the current target value. Every correct move clears the chosen tiles, earns points, and keeps the board from filling up. Every wrong move adds a penalty, and the game becomes more challenging as the falling speed increases.

## Gameplay

The board is filled with numbered tiles arranged in a grid. At any moment, the game shows a target number, which is generated from a cluster of adjacent numbers already on the board. The player must look for a connected group of tiles whose sum matches that target exactly.

- Select neighboring tiles to build a group.
- Track the current total in real time.
- Submit the selection when it reaches the target number.
- Successful moves remove the tiles and award score points.
- Incorrect choices trigger penalties and can make the board harder to manage.

## Core mechanics

- Connected selection: only adjacent tiles can be chosen together.
- Target matching: the selected numbers must sum to the exact target.
- Score system: each number has a different value, so choosing larger combinations gives bigger rewards.
- Speed progression: as the score grows, the gravity or falling speed increases.
- Penalty system: wrong moves increase the penalty counter, and repeated mistakes can force a row reset.
- Game over: if the board reaches a blocked state at the top, the game ends.

## Objective

The goal is simple: survive as long as possible, keep the board under control, and achieve the highest score possible by planning your number combinations strategically. The challenge is not only solving the target, but also deciding which tiles to keep for future plays.

## Project stack

This project is built with React Native and uses:

- React Navigation for screen flow between the menu, the game, the leaderboard, and the game-over screen
- Zustand for game state management
- Async Storage for persistent leaderboard scores.
- Mobile-friendly UI and gameplay logic designed for touch interaction

## How to run

1. Install dependencies:
    npm install
2. Start the app:
    npm start
3. Run it on an emulator or a physical device.

## Features

- Dynamic target generation based on adjacent board values.
- Strategic selection and number combination logic.
- Real-time score and speed changes.
- Persistent leaderboard with local storage.
- Game over and restart flow.