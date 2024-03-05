import './App.css'
import {Timeline} from "./components/Timeline.tsx";
import React, {useCallback, useEffect, useState} from "react";
import {Transactions} from "./components/Transactions.tsx";


import {generateTransactions} from "./utils/transactions.utils.tsx";
import {TTransaction} from "./types/transactions.types.ts";
import {IRange} from "./types/time.types.ts";


const now = new Date();
const start = new Date();
start.setHours(start.getHours() - 6);

// const transactions = generateTransactions(start, now);

function App() {

    const [range, setRange] = useState<IRange>({start, end: now});
    const [transactions, setTransactions] = useState<TTransaction[]>([]);
    const [loadedRanges, setLoadedRanges] = useState<IRange[]>([]);

    const onRangeChanged = useCallback((e: IRange) => {
        setRange(e);
    }, []);


    useEffect(() => {
        setTransactions(generateTransactions(range))
    }, [range]);

    return <Timeline initialRange={{start: start, end: now}} onRangeChanged={onRangeChanged}>
        <Transactions transactions={transactions}/>
    </Timeline>;
}

export default App
