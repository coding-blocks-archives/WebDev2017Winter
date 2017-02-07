#!/usr/local/bin/node

/**
 * Created by championswimmer on 24/01/17.
 */

function doAfter3Sec (task) {
    console.log('will do task after 3 sec');
    setTimeout(function () {
        console.log('about to do task');
        task(function (afterDone) {
            console.log('it is done');
            afterDone();
        });
    }, 1000)
}

function askForTask() {
    console.log('try to do task');
    doAfter3Sec(function (done) {
        console.log('doing task');
        done(function () {
            console.log('now what ?');
        });
    });
    console.log('is task done ? ');
}

askForTask();


function downloadFile(url, downloaded) {
    var dlFile;
    //async download file to var dlFile

    downloaded(dlFile)

}

function saveFile(data, path, saved) {

    //async saves data to path

    saved(path, wasSaved)

}

function showFile() {
    downloadFile('http://a.com/img.jpg', function (downloadedData) {
        saveFile(data, 'C:/Some/Path', function (path, wasSaved) {
          if (wasSaved) {
              // show the file on that path = 'path'
          }
        })
    });
    console.log('asdasd');
}
