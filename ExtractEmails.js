function extractEmails(input) {
    let pattern = /(?<user>[a-zA-Z\d]+[\-\_\.]?[a-zA-Z\d]+)@{1}(?<host>[a-zA-Z\-]+(\.[a-zA-Z\-]+)+)/g;

    if (pattern !== null) {
        console.log(input.match(pattern).join('\n'));
    }
}
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');