import {useEffect, useState} from "react";
import {debounce} from 'lodash';

function sandbox() {


    // задание 3
    let a = 'Hello';
    let b = a.split("").reduce((acc, char) => char + acc, "");
    console.log(b);

    // задание 4
    const result = Math.floor(Math.random() * 101);
    console.log(result);


    // 5 задание
    const array = [1, '', '123123123', null, [], {}];

    array.forEach(el => console.log(el));


    // 6 задание
    const array = [30, 1, 5, 7, 30, 06, 30];

    const dub = new Set(array).size !== array.length;
    const dubAll = new Set(array).size === 1;

    console.log(dub);
    console.log(dubAll);


    // 7 задание
    const array = [1, '', 2, 3, 2, 6, 7, 8, 0, 0, '123123123', null, [], {}];

    const chet = array.filter(n => typeof n === 'number' && n && n % 2 === 0);
    const neChet = array.filter(n => typeof n === 'number' && n && n % 2 !== 0);
    const nuli = array.filter(n => typeof n === 'number' && n == 0);

    console.log(chet.length);
    console.log(neChet.length);
    console.log(nuli.length);


    // 8 задание
    const map = {
        name: 'Ника',
        amount: 17,
        id: 35,
    };

    Object.keys(map).forEach(key => {
        const templateStr = `Ключ - ${key}, Значение - ${map[key]}`;
        console.log(templateStr);
    });
    return (
        <>
        </>
    );
}
export default sandbox;
