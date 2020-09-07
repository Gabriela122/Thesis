<template>
    <div id="container2" class="cont">
        <h1>Obliczanie równania kwadratowego</h1><br><br>
        <strong>y = ax<sup>2</sup> + bx + c<br></strong>
        <button onclick="quadraticEquation()" id="quadraticSolver">Solve</button>
        <br>
        Czas obliczania 1000 równań
        <p id="timeResolution"></p>
        Wyniki każdego z równań wraz z czasem ich obliczania
        <p id="results"></p>
        Czas wyswietlania wszystkich wyników
        <p id="timeRes"></p>
        <a href="#container3">
            <div class="arrow">
                <p class="arrow-para">V</p>
            </div>
        </a>
    </div>
</template>
