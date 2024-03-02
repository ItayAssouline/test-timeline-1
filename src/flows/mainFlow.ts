import {useTimelineStore} from "../store/dataStore.ts";
import {v4 as uuid} from "uuid";

export const mainFlow = async () => {
    // await sleep(1000);

    const items = [];
    const baseDate = new Date();
    for (let i = 0; i < 3000; i++) {
        const newItem = {
            id: uuid(),
            content: `${i}`,
            start: new Date(baseDate.getTime() + i * 60000 * 60), // Increment by one minute for each item,

        };
        items.push(newItem)
    }
    useTimelineStore.getState().addItems(items);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}