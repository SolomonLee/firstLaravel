import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FillItem from "./FillItem";
import {
    loginAsync,
    logoutAsync,
    signupAsync,
    selectUserType,
    selectUserStatus,
    selectUserName,
} from "../../reducers/userRedux";

function User() {
    const userStatus = useSelector(selectUserStatus);
    const userType = useSelector(selectUserType);
    // const userBirth = useSelector(selectUserBirth);
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [useLogin, setUseLogin] = useState(true);

    const handlerShowLoginModal = (e) => {
        $("#UserLoginModal").modal("show");
    };

    const afterChangeModalState = () => {
        console.log("afterChangeModalState userType:", userType);

        if (userType === 1) {
            // login or sigin fail
            setUseLogin(false);
        } else {
            setUseLogin(true);
            $("#UserLoginModal").modal("hide");
        }
    };

    const handlerLogin = (e) => {
        console.log("login info account:", account, "  password:", password);
        if (account == "" && password == "") {
            setUseLogin(true);
            alert("請確認輸入資訊");
        } else {
            dispatch(
                loginAsync({
                    type: 2,
                    name: "李姓男子",
                    birth: "1999/12/12",
                })
            ).finally(() => {
                console.log("handlerLogin finally userType:", userType);
                afterChangeModalState();
            });
        }
    };

    const handlerLogout = (e) => {
        dispatch(logoutAsync());
    };

    const handlerSignup = (e) => {
        console.log(
            "signup info account:",
            account,
            "  password:",
            password,
            "  name:",
            name,
            "  birth:",
            birth
        );

        if (account == "" || password == "" || name == "" || birth == "") {
            setUseLogin(false);
            alert("請確認輸入資訊");
        } else {
            dispatch(
                signupAsync({
                    account: account,
                    password: password,
                    name: name,
                    birth: birth,
                    type: 2,
                })
            ).finally(() => {
                console.log("handlerSignup finally userType:", userType);
                afterChangeModalState();
            });
        }
    };

    const handlerChangeSignup = (e) => {
        setUseLogin(false);
    };

    const handlerChangeLogin = (e) => {
        setUseLogin(true);
    };

    return (
        <div className="user_box" boxtype={userStatus}>
            <div className="box_title"></div>
            <div className="box_content">
                {userType == 1 ? (
                    <button
                        className="btn"
                        styleno="login"
                        onClick={handlerShowLoginModal}
                    >
                        登入
                    </button>
                ) : (
                    <button
                        className="btn"
                        styleno="logout"
                        onClick={handlerLogout}
                    >
                        {userName} : 登出
                    </button>
                )}
            </div>
            <div className="box_bottom">
                {userStatus == "onlogout" ? "登出中..." : null}
            </div>
            <div
                className="modal"
                tabIndex="-1"
                role="dialog"
                id="UserLoginModal"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {!useLogin ? "登入" : "註冊"}
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FillItem
                                title="帳號"
                                placeholder="輸入您的帳號"
                                setValue={setAccount}
                                type="text"
                                defaultValue={account}
                                request={true}
                            />
                            <FillItem
                                placeholder="輸入您的密碼"
                                setValue={setPassword}
                                type="text"
                                defaultValue={password}
                                request={true}
                            />
                            {!useLogin ? (
                                <div>
                                    <FillItem
                                        placeholder="輸入您的名稱"
                                        setValue={setName}
                                        type="text"
                                        defaultValue={name}
                                        request={true}
                                    />
                                    <FillItem
                                        placeholder="輸入您的生日"
                                        setValue={setBirth}
                                        type="text"
                                        defaultValue={birth}
                                        request={true}
                                    />
                                </div>
                            ) : null}
                        </div>
                        <div className="modal-footer">
                            {useLogin ? (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handlerLogin}
                                >
                                    登入
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handlerSignup}
                                >
                                    註冊
                                </button>
                            )}

                            {useLogin ? (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handlerChangeSignup}
                                >
                                    前往註冊
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handlerChangeLogin}
                                >
                                    返回登入
                                </button>
                            )}

                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                關閉
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
