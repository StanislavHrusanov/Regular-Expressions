function matchDates(text) {

    let pattern = /\b[0-9]{2}([.,\-,/])[A-Z]{1}[a-z]{2}\1[0-9]{4}\b/g;

    let validDate = null;

    while ((validDate = pattern.exec(text)) != null) {
        let date = validDate[0];
        let separator = validDate[1];
        let [day, month, year] = date.split(separator);

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");