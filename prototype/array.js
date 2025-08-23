if(!Array.prototype.sort) {
    Array.prototype.sort = function(compFun) {
        const arr = this;
        const len = arr.length;
    
        const compare = typeof compFun === 'function' ? compFun : (a,b) => {
            a = String(a);
            b = String(b);
            if(a > b) return 1;
            if(b > a) return -1;
            return 0;
        }

        for(let i=0; i<len-1; i++) {
            for(let j=0; j<len-1-i; j++) {
                if(compare(arr[j], arr[j+1]) > 0) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        return arr;
    }
}

if(!Array.prototype.map) {
    Array.prototype.map = function(compfun) {
        const arr = this;
        const len = arr.length;
        const process = typeof compfun === 'function' ? compfun : (a) => a
        for(let i=0; i<arr.length; i++) {
            arr[i] = process(arr[i]);
        }
        return arr;
    }
}

if(!Array.prototype.filter) {
    Array.prototype.filter = function(compfun) {
        const arr = this;
        const len = arr.length;
        const newArr = [];
        const process = typeof compfun === 'function' ? compfun : (a) => a
        for(let i=0; i<arr.length; i++) {
            if(process(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}

if(!window.setMyInterval) {
    let interval;
    window.setMyInterval = function(func, delay) {
        function run () {
            if(!interval) return false;
            func();
            interval = setTimeout(run, delay);
        }
        interval = setTimeout(run, delay);
        return interval;
    }
    window.clearMyInterval = function(instance) {
        interval = null;
        clearMyInterval(instance);
    }
}

// console.log([2,4,1].sort((a,b) => a > b ? 1 : -1));
// console.log([2,4,1].map((a) => a * 100));
// console.log([2,4,1].filter((a) => a !== 2));

const interval = window.setMyInterval(() => console.log('RUNNING'), 1000);

setTimeout(() => {
    console.log(interval);
    clearMyInterval(interval);
}, 5000);