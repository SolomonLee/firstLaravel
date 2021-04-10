// A mock function to mimic making an async request for data
export const login = (data) => {
    console.log("data:", data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!data) reject();

            resolve({ data: data });

            // if (data.type == 1) {
            // } else {
            //     resolve({
            //         data: {
            //             type: 2,
            //             name: "李姓男子",
            //             birth: "1999/12/12",
            //         },
            //         yourdata: data,
            //     });
            // }
        }, 500);
    });
};

export const logout = () => {
    return login({
        type: 1,
        name: "遊客",
        birth: "1999/01/01",
    });
};

export const signup = (data) => {
    return login(data);
};
