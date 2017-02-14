/**
 * Created by championswimmer on 14/02/17.
 */


function waitASec() {
    var startTime = (new Date()).getTime();
    while (true) {
        if ((new Date()).getTime() > startTime + 1000)
            return
    }
}

function waitNSec(N) {
    for (var i = 0; i < N; i++) {
        waitASec()
    }
}

function doAsyncNSecTask(N, cb) {
    if (cb) {
        setTimeout(cb, 1000 * N);
    }
    else {
        setTimeout(() => {}, 1000 * N)
    }
}

function saveFile(data, path, done) {
    console.log('saveFile called');
    //save data to path
    doAsyncNSecTask(3, function () {
        console.log('saveFile data saved');
        done()
    });

}

function dlFile(url, path, done) {
    console.log('dlFile called');
    // download url to string s
    waitNSec(4);
    var s = "asdsadas";
    console.log('file downloaded and is in ram');

    //save s to path
    saveFile(s, path, function () {
        console.log('file has been saved');
    });
    done()

}

dlFile("http://google.com", "/my/path/", function () {
   console.log('file has been downloaded and saved');
});

