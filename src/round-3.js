// convert 12 hrs to 24 hrs//


const convertTime12to24 =time12h=>{
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if(hours === "12")
     {
        hours ="00";
    }
    if(modifier === "PM") 
    {
        hours=parseInt(hours) + 12;
    }
    return `${hours}: ${minutes}`;
};

console.log(convertTime12to24("02:02 PM"));

// var convertedTime = convertTime12to24("01:00 PM");
// console.log(convertedTime);

