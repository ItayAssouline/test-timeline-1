import {DataSet, Timeline} from "vis-timeline/standalone";
import {IRange} from "../types/time.types.ts";

export class TimelineApi {
    private _container?: HTMLDivElement;
    private _timeline?: Timeline;
    public didInit = false;

    private get container() {
        if (!this._container) throw new Error("tried accessing container before initialized");
        return this._container
    }

    public async init(container: HTMLDivElement, dataset: any, initialRange: IRange, onRangeChanged: (e: IRange) => void) {


        this.didInit = true;
        this._container = container;
        this._timeline = new Timeline(this.container, dataset, {
            stack: false,
            start: initialRange.start,
            end: initialRange.end
        });
        this._timeline.on("rangechanged", onRangeChanged);
    }
}