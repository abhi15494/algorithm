if(Array.prototype.sort) {
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

console.log([2,4,1].sort((a,b) => a > b ? 1 : -1));