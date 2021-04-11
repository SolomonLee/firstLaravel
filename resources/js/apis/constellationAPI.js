const _return = _data => {
    return { data: _data };
};

// A mock function to mimic making an async request for data
export const getConstellation = () => {
    return fetch("/Api/Constellation/Get")
        .then(response => response)
        .catch(function(err) {
            console.log("error : ", err);
        });
    // return new Promise((resolve, reject) => {
    //     fetch("/Api/Constellation/Get")
    //         .then(response => response.json())
    //         .then(data => resolve(_return(data)))
    //         .catch(function(err) {
    //             reject(err);
    //         });
    // });
};
