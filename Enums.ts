enum SeatChoice {
    AISLE = 'aisle',
    MIDDLE = 'middle',
    WINDOW = 'window',
    FOURTH = 'fourth'
}

const mSeat = SeatChoice.AISLE
console.log(mSeat);

if (mSeat == 'aisle'){
    console.log(true);
}

// generates less code in javascript
// const enum SeatChoice {
//     AISLE = 'aisle',
//     MIDDLE = 'middle',
//     WINDOW = 'window',
//     FOURTH = 'fourth'
// }


export{}