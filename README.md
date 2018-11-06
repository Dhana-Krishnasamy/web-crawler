# Web Crawler

# Install

Install latest Nodejs
Install latest npm
Run npm install from this project directory

# Run the program

Run `node index.js 'Full URL'`
Example: `node index.js https://wiprodigital.com`
Or simply run `npm start` to run the above command

# Run the test

Run `npm test`

# Assumptions & Limitations

The input url is fully qualified url.
The input is root level url of the site.
No HTTP redirects are handled.
Too many deep links will not scale well.
Only 10 links are processed at a time.
Links and errors are skipped if there are any errors when visiting a link
