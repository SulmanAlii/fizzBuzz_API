var date = new Date();


const getDate = () => {
    var todayDate = date.toLocaleDateString();
    var todayTiming = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();    

    return todayDate + " " + todayTiming;
}

module.exports = {getDate}