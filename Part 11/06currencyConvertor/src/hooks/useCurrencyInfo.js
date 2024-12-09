import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    // using empty object inside useState(), so that if api not work and data don't come, then it will not throw me an error
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res => res.json())
        .then(data => setData(data[currency]));
        console.log(data);
    }, [currency])

    // not possible, error comes
    // return [data, setData]

    console.log(data);
    return data;
}

/* const [data, setData] = useCurrencyInfo('usd');
console.log(data); */

// error comes if we tried above
/* Uncaught SyntaxError: Cannot use import statement outside a module (at useCurrencyInfo.js:1:1) */

export default useCurrencyInfo;