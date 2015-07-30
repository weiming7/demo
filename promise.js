/**
 *  George
 *  2015/7/30 19:08
 */
/**
 *  George
 *  2015/7/30 18:12
 */
var Q = require('q');
var fs = require('fs');

function fs_readFile(file){
    return Q.promise(function (resolve,reject,notify) {
        fs.readFile(file, function (err,data) {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        });
    });
};

fs_readFile('1.txt')
    .then(function(data){console.log(data.toString())})
    .fail(function(err){console.log(err)});