# Project Plan

xxx

## State

viewState
theme - Numbers / Icons
numOfPlayers - 1 to 4
gridSize - 4x4 or 6x6
gridTiles - array
numOfTilesSelected - 0-2

## Components

Start View = () => {
// select theme - update state
// select numOfPlayers - update state
// select gridSize - update state

// Start Game
}

Play View = (isSoloGame, numOfPlayers, grid) => {

}

End View

grid (array of numbers) -- size
grid tile -- what to display

## Functions

const startGame = (theme, isSoloGame, numOfPlayers, gridSize) => {
// Setup a new grid
// Show correct footer
}

const createNewGrid = (gridSize, theme): tile[] => {

const newGrid = [];

// if theme === numbers {

}

// if theme === icons {
const icons = [a, b, c, d, e, f];
newGrid = icons.map((icon, index) => {
return {index: index, icon: a, isMatched: false}
})
}
}

const checkIsMatch = (tile1, tile2): boolean => { -- check is match on 2nd tile click of player move
if tile1 value === tile 2 value, return true, otherwise return false
}

useEffect - runs checkIsMatch each time the numOfTilesSelected = 2

handleSelectTile = () => {

}

createGridTileContents = () => {

}

## Types

tile = {index: 0, value: 3, isMatched: true} -- display: if isMatched, display value, text white, background orange, otherwise all dark blue
grid (tile[]) = [{index: 0, value: 3, isMatched: true}, {index: 0, value: 3, isMatched: true}]

theme - numbers | icons
isSoloGame = {isSoloGame: true} | {isSoloGame: false, numOfPlayers: 2-4}
gridSize - 16 / 36
