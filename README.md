# Web Crawler

# Install

1. Install latest Nodejs
2. Install latest npm
3. Run npm install from this project directory

# Run the program

1. Run `node index.js 'Full URL'`
2. Example: `node index.js https://wiprodigital.com`
3. Or simply run `npm start` to run the above command

# Run the test

Run `npm test`

# Assumptions & Limitations

1. The input url is fully qualified url.
2. The input is root level url of the site.
3. No HTTP redirects are handled.
4. Too many deep links will not scale well.
5. Only 10 links are processed at a time.
6. Links and errors are skipped if there are any errors when visiting a link
