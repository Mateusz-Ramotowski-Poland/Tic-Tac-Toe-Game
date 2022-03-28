<!-- finished:
technologies used
contact -->
# Game Tic Tac Toe
It will be more complex version of Tic Tac Toe game.
 

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)
* [Description of Code. Help for the author.](#Description-of-Code.-Help-for-the-author.)
* [Contact](#contact)

## General Information
This project is a browser game and I think that everyone knows the rules.  I created it to practice my programming skills. In this project, I focused on learning JS and chrome developer tools. It's working on laptop/computer screen on Google Chrome browser. I didn't check it on other browsers and on mobiles - I want to do it in the future. 

## Technologies Used
Project is created with:
* HTML5
* CSS3
* JS(ES6+)

I was using Chrome developer tools for testing my application.
## Features
Finished features:
- You can play with computer on grid 3x3.
- You can choose other grids to play (but game won't check correctly who won the game).
- Game gives text information for player.
Planned features:
- option for playing on different grids: 5x5 and 7x7.
- option for choosing if You want to play with computer or other player.

## Screenshots


## Project Status
Project is in progress.

## Acknowledgements
Thanks https://pl.crazygames.com/gra/tic-tac-toe for idea of more complex Tic TAc Toe version.

## Description of Code. Help for the author.
When someone will win the game:
*V zmień information for player area na "X/O won!"
*V zabierz event listenery dla grid boxów
*V zmień wartość zmiennej someoneWon na true

When I click button to change grid:
*V  grid area is rendered
*V  ukryj wszystkie przyciski grid size (atrybut hidden)
*V  pokaż przycisk play again (atrybut hidden)
*V  dodaj EventListener dla każdego grid Box
*V   change information for player area na "Place 3 in a row to win!"
*V  give freeGridBoxes początkowe elementy i długość
*V   clean xOnGRid
*V   clean oOnGrid

When I click button play again:
*V  pokaż przyciski change grid size
*V  ukryj przycisk play again
*V   usuń grid area to play (zamień innerHTML of this section na "")
*V   change information for player area na "Choose grid to play."
*V zmień wartość someoneWon na false

When I click on Grid Box:
*V  narysuj X na tym polu (gracz)
*V  sprawdź zwycięstwo dla X
*V  zabierz event lestenera dla tego pola
*V  zmień wartość tablicy freeGridBoxes

*V  sprawdź czy są wolne miejsca w tablicy freeGridBoxes (Nullish coalescing operator (??))
*V  komputer stawia 0 na losowym wolnym polu
*V  sprawdź zwycięstwo dla O
*V  zabierz event lestenera dla tego pola
*V  zmień wartość tablicy freeGridBoxes 

## Contact
Created by Mateusz Ramotowski (mateusz.ramotowski.praca@gmail.com) - feel free to contact me!


Uwagi:
- w tym projekcie wyświetlana na stronie www jest branch gh-pages.
- zanim zmienię branch gh-pages i zapiszę zmiany muszę czasami poczekać do 20 minut zanim zobaczę je na wyświetlanej stronie www.