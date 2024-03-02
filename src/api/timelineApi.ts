import {DataSet, Timeline} from "vis-timeline/standalone";
import {useTimelineStore} from "../store/dataStore.ts";
import {mainFlow} from "../flows/mainFlow.ts";

export class TimelineApi {
    private _container?: HTMLDivElement;
    private _timeline?: Timeline;
    public didInit = false;

    private get container() {
        if (!this._container) throw new Error("tried accessing container before initialized");
        return this._container
    }

    public async init(container: HTMLDivElement) {
        this.didInit = true;
        this._container = container;
        const dataset = useTimelineStore.getState().dataSet;
        this._timeline = new Timeline(this.container, dataset, {
            stack: false
        });
        await mainFlow();
    }
}