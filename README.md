# vinyl-named

Give vinyl files arbitrary chunk names.

## example

```js
var named = require('vinyl-named')
var fs = require('vinyl-fs')
var through = require('through')

fs.src('src/*.js')
  .pipe(named())
  .pipe(through(function(file) {
    // file.named now equals the basename minus the extension
  }))

// Or return a name for a given file
fs.src('src/*.js')
  .pipe(named(function(file) {
    return 'your own name'
  }))

// Or specify a custom name property
fs.src('src/*.js')
  .pipe(named(function(file) {
    file.customName = 'your name'
    this.queue(file)
  }))
```

## install

With [npm](http://npmjs.org) do:

```shell
npm install vinyl-named
```

## release history

* 1.1.0 - renaming `chunkName` to `named` to be more generic
* 1.0.0 - initial release

## license
Copyright (c) 2014 Kyle Robinson Young  
Licensed under the MIT license.
