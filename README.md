## Website Performance Optimization portfolio project

This project is a clone of Udacity's [frontend-nanodegree-mobile-portfolio](https://github.com/udacity/frontend-nanodegree-mobile-portfolio) and optimized based on the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### Getting started

After having cloned this project, got to its root folder:

To Run a development version
* `$ gulp run` to run the project
* go to http://localhost:7083/

To Run a dist version
* `$ gulp build` to generate dist files
* `$ gulp run-dist` to run the project
* go to http://localhost:8888/

### Optimizations made

##### global

* Moved scripts to the end of the pages
* Minified JS files and concatenated into a single file
* Minified CSS files, concatenated and 'inlined it
* Removed google foont
* Minified HTML files
* Optimized images
* Replaced `queryAll` and `querySelectorAll` with the more specific query selection methods: `getElementById` and `getElementsByClassNames`
* Created servers with gulp
* Integrated ngrok

###### pizzas

* Optimized pizzas creation
* Optimized scrolling
* Optimized size changes

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
