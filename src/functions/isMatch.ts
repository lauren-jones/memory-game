import { tileContent } from "../types/tileContent";

export const isMatch = (tileOneContent: tileContent, tileTwoContent: tileContent): boolean => {
    return tileOneContent === tileTwoContent;
}