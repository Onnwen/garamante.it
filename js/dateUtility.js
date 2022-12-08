function dateIntervalToString(d) {
    let now = new Date();
    let date = new Date(d);
    console.log(now);
    console.log(date);
    let elapsed = (now.getTime() - date.getTime()) / 1000;
    let value = elapsed
    let unit = "second";

    console.log(date.getTime())
    console.log(elapsed);

    if (elapsed > 31536000) {
        value = elapsed / 31536000;
        unit = "ann";
    }
    else if (elapsed > 2629800) {
        value = elapsed / 2629800;
        unit = "mes";
    }
    else if (elapsed > 86400) {
        value = elapsed / 86400;
        unit = "giorn";
    }
    else if (elapsed > 3600) {
        value = elapsed / 3600;
        unit = "or";
    }
    else if (elapsed > 60) {
        value = elapsed / 60;
        unit = "minut";
    }

    value = Math.floor(value);

    if (value === 1 && unit === "or") {
        return value + " " + unit + "a fa";
    }
    else if (unit === "or") {
        return value + " " + unit + "e fa";
    }
    else if (value === 1) {
        return value + " " + unit + "o fa";
    }
    else {
        return value + " " + unit + "i fa";
    }
}