<!-- finished:
technologies used
contact -->
# Hangman-Game-Vanilia-JS
> 
>  

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)
* [Description of Code](#Description-of-Code)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information


## Technologies Used
Project is created with:
* HTML5
* CSS3
* JS(ES6+)

I was using chrome developer tools for testing my application.
## Features


## Screenshots


## Project Status


## Acknowledgements


## Description of Code
When I click button to change grid:
*V  grid area is rendered
*V  ukryj wszystkie przyciski grid size (atrybut hidden)
*V  pokaż przycisk play again (atrybut hidden)
*V  dodaj EventListener dla każdego grid Box
*V   change information for player area na "Place 3 in a row to win!"
*V  give freeGridBoxes początkowe elementy i długość
*   clean xOnGRid
*   clean oOnGrid

When I click button play again:
*V  pokaż przyciski change grid size
*V  ukryj przycisk play again
*V   usuń grid area to play (zamień innerHTML of this section na "")
*V   change information for player area na "Choose grid to play."

When I click on Grid Box:
*V  narysuj X na tym polu (gracz)
*V  sprawdź zwycięstwo dla X
*V  zabierz event lestenera dla tego pola
*V  zmień wartość tablicy freeGridBoxes
*V  sprawdź czy są wolne miejsca w tablicy freeGridBoxes (Nullish coalescing operator (??))
*V  komputer stawia 0 na losowym wolnym polu
*  sprawdź zwycięstwo dla O
*V  zabierz event lestenera dla tego pola
*V  zmień wartość tablicy freeGridBoxes 

## Contact
Created by Mateusz Ramotowski (mateusz.ramotowski.praca@gmail.com) - feel free to contact me!
