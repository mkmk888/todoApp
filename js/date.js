const clockDate = document.querySelector("#clock-date");

function getdate(){
    const date = new Date();
    const year = String(date.getYear()+1900);
    const month = String(date.getMonth()+1);
    const day = String(date.getDate());
    clockDate.innerText = `${year}년 ${month}월 ${day}일`;
}

getdate();