import { faSnowflake, faTractor, faUserAstronaut, faCookieBite, faOtter, faWandMagicSparkles, faHippo, faGhost, faUmbrella, faSun, faRocket, faDice, faYinYang, faGift, faFire, faFish, faCube, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export const getTileContents = (isNumberTheme: boolean, gridSize: number): FontAwesomeIconProps["icon"][] | number[] => {

    const snowflake = faSnowflake;
    const wand = faWandMagicSparkles;
    const hippo = faHippo;
    const ghost = faGhost;
    const umbrella = faUmbrella;
    const sun = faSun;
    const rocket = faRocket;
    const dice = faDice;
    const yinyang = faYinYang;
    const gift = faGift;
    const fire = faFire;
    const fish = faFish;
    const cube = faCube;
    const puzzle = faPuzzlePiece;
    const otter = faOtter;
    const cookie = faCookieBite;
    const astronaut = faUserAstronaut;
    const tractor = faTractor;

    const iconTiles = [snowflake, snowflake, wand, wand, hippo, hippo, ghost, ghost, umbrella, umbrella, sun, sun, rocket, rocket, dice, dice, yinyang, yinyang, gift, gift, fire, fire, fish, fish, cube, cube, puzzle, puzzle, otter, otter, cookie, cookie, astronaut, astronaut, tractor, tractor]

    const numberTiles = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18];

    if (isNumberTheme) {
        if (gridSize === 16) {
            return numberTiles.slice(0, 16);
        }

        return numberTiles;
    }

    if (gridSize === 16) {
        return iconTiles.slice(0, 16);
    }

    return iconTiles;
}