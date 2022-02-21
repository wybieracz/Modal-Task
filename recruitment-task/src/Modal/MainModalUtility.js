import axios from "axios";
axios.defaults.withCredentials = true;

// I'm aware that this request is not working due to CORS, but as far as I know it has to be repaired on backend side.

async function makeRequest(name, format, email, schedule, day, hour) {

    const data = {
        name: name,
        format: format,
        email: email,
        schedule: schedule,
        day: day,
        hour: hour
    };

    try {
        await axios.post("https://postman-echo.com/post", data).then(
            response => {
                console.log(response)
                alert("Request sent succesfully!")
            }
        );
    } catch (error) {
        console.error(error);
        alert("Something went wrong!")
    }
}

function checkInputs(name, email, schedule, day, hour) {
    if(name === "") return true;
    if(email === "") return true;
    if(schedule === "Specyific Date" && (day ==="" || hour ==="")) return true;
    if(schedule === "Daily" && hour === "") return true;
    if(schedule === "Weekly" && hour === "") return true;
    return false;
}

export { makeRequest, checkInputs }