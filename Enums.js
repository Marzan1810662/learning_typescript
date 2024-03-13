var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice["WINDOW"] = "window";
    SeatChoice["FOURTH"] = "fourth";
})(SeatChoice || (SeatChoice = {}));
var mSeat = SeatChoice.AISLE;
if (mSeat == 'aisle') {
    console.log(true);
}
