function parseLogs(logs, regex) {
    let isFirst = true;
    return logs.replaceAll(regex, function (date) {
        if (isFirst) {
            isFirst = false;
            return date;
        } else {
            return "<hr>" + date;
        }
    });
}