// store.ts
import create from 'zustand'
import {DataSet} from 'vis-timeline/standalone';

interface TimelineState {
    dataSet: DataSet<any>;
    addItem: (item: any) => void;
    addItems: (items: any[]) => void;
    removeItem: (id: number | string) => void;
    updateItem: (item: any) => void;
}

export const useTimelineStore = create<TimelineState>((set, get) => ({
    dataSet: new DataSet(),
    addItem: (item) => get().dataSet.add(item),
    addItems: (items) => get().dataSet.add(items),
    removeItem: (id) => get().dataSet.remove(id),
    updateItem: (item) => get().dataSet.update(item),

}));