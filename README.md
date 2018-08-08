
# BigSexy Poems - Proof Of Concept

by [Ben Nadel][bennadel]

**[Run the Proof-of-Concept Angular App][poc]** &raquo;

This is a **work in progress** / **proof-of-concept** for my BigSexy Poems
application. BigSexy Poems is a small utility application that helps you author
poems by placing Rhyming, Synonym, and Syllable Count tools right next to your
writing surface. This way, you have everything you need in one place.

BigSexy Poems is an Angular application that consumes the [Datamuse API][datamuse]
over CORS (Cross-Origin Resource Sharing) AJAX (Asynchronous JavaScript and
JSON) requests. Originally, I want to consume the Datamuse API via a server-
side proxy that would cache and return Datamuse APIs from a Redis database.
But, that was before I realized that the Datamuse API could be consumed via
AJAX. Once I realized that, I figured I could create an abstraction - the
`WordSerivce` class - in the Angular app that could easily be replaced if and
when I wanted to move to the server-side proxy.

## Building The Project

You can build the project using one of two commands (after running `npm install`
of course):

* `npm run watch`
* `npm run build`

The `watch` command will watch the file-system for update events and the update
the build. The `build` command will just read the files and generate a one-time
build.

### Local Development Optimization

When developing locally, I tend to do two things:

* Comment-out the "uglification" in the `webpack.config.js` This can be done by
  commenting-out the `new webpack.optimize.UglifyJsPlugin()` plug-in.
* Comment-out the "production mode" in the `main.ts` file. This can be done by
  commenting-out the `enableProdMode()` invocation.


[bennadel]: https://www.bennadel.com
[datamuse]: https://www.datamuse.com/api/
[poc]: https://bennadel.github.io/big-sexy-poems-poc
