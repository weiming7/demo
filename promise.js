/**
 *  George
 *  2015/7/30 19:08
 */
/**
 *  George
 *  2015/7/30 18:12
 */
//var Q = require('q');
var fs = require('fs');

//function fs_readFile(file){
//    return Q.promise(function (resolve,reject,notify) {
//        fs.readFile(file, function (err,data) {
//            if(err){
//                reject(err)
//            }
//            else{
//                resolve(data)
//            }
//        });
//    });
//};
//
//fs_readFile('1.txt')
//    .then(function(data){console.log(data.toString())})
//    .fail(function(err){console.log(err)});



//var val = 1;
//
//// 我们假设step1, step2, step3都是ajax调用后端或者是
//// 在Node.js上查询数据库的异步操作
//// 每个步骤都有对应的失败和成功处理回调
//// 需求是这样，step1、step2、step3必须按顺序执行
//function step1(resolve, reject) {
//    console.log('步骤一：执行');
//    if (val >= 1) {
//        resolve('Hello I am No.1');
//    } else if (val === 0) {
//        reject(val);
//    }
//}
//
//function step2(resolve, reject) {
//    console.log('步骤二：执行');
//    if (val === 1) {
//        resolve('Hello I am No.2');
//    } else if (val === 0) {
//        reject(val);
//    }
//}
//
//function step3(resolve, reject) {
//    console.log('步骤三：执行');
//    if (val === 1) {
//        resolve('Hello I am No.3');
//    } else if (val === 0) {
//        reject(val);
//    }
//}
//
//Q.promise(step1).then(function(val){
//    console.info(val);
//    return Q.promise(step2);
//}).then(function(val){
//    console.info(val);
//    return Q.promise(step3);
//}).then(function(val){
//    console.info(val);
//    return val;
//}).then(function(val){
//    console.info(val);
//    return val;
//});



var val = 1;

// 我们假设step1, step2, step3都是ajax调用后端或者是
// 在Node.js上查询数据库的异步操作
// 每个步骤都有对应的失败和成功处理回调
// 需求是这样，step1、step2、step3必须按顺序执行
function step1(resolve, reject) {
    console.log('步骤一：执行');
    if (val >= 1) {
        resolve('Hello I am No.1');
    } else if (val === 0) {
        reject(val);
    }
}

function step2(resolve, reject) {
    console.log('步骤二：执行');
    if (val === 1) {
        resolve('Hello I am No.2');
    } else if (val === 0) {
        reject(val);
    }
}

function step3(resolve, reject) {
    console.log('步骤三：执行');
    if (val === 1) {
        resolve('Hello I am No.3');
    } else if (val === 0) {
        reject(val);
    }
}

new Promise(step1).then(function(val){
    console.info(val);
    return new Promise(step2);
}).then(function(val){
    console.info(val);
    return new Promise(step3);
}).then(function(val){
    console.info(val);
    return val;
}).then(function(val){
    console.info(val);
    return val;
});