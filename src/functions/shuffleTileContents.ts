import { tileContent } from "../types/tileContent";

export const shuffleTileContents = (tileContents: tileContent[]) => {
    for (let i = tileContents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileContents[i], tileContents[j]] = [tileContents[j], tileContents[i]];
    }
    return tileContents;
}