/**
 * Created by Mattchoo_Mac on 2/6/16.
 */
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('/Users/Mattchoo_Mac/Desktop/dev/jaiachat/')).listen(8888);