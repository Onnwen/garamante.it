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