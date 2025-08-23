async function doCachedApiCall() {
    const cacheTimeLimit = 10 * 1000;
    const apiUrl = `https://jsonplaceholder.typicode.com/users`;
    const LOCALSTORAGEKEY = 'cachedUser';
    const currentDate = (new Date()).getTime();
    let cachedData = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY));
    const $result = document.getElementById('result');

    if(currentDate > cachedData?.time+cacheTimeLimit) {
        localStorage.clear(LOCALSTORAGEKEY);
        cachedData = null;
    }

    if(cachedData) {
        $result.textContent = '[FROM CACHED_DATA]:' + cachedData.data;

        return cachedData.data;
    } else {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        $result.textContent = '[FROM UNCACHED_DATA]:' + data;

        localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify({
            data, 
            time: (new Date()).getTime()
        }));

        return data;
    }
}
    
(function() {
    const $button = document.getElementById('doApiCall');
    $button.addEventListener('click', doCachedApiCall);
})();