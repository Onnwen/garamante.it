function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function parseLogs(logs, regex) {
    let isFirst = true;
    return logs.replaceAll(regex, function (date) {
        if (isFirst) {
            isFirst = false;
            return date;
        } else {
            isFirst = true;
            return "<hr>" + date;
        }
    });
}