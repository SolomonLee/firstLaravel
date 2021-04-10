import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getAsync,
    selectConstellationStatus,
    selectConstellationDatas
} from "../../reducers/constellationRedux";

function ConstellationList() {
    const constellationDatas = useSelector(selectConstellationDatas);
    const constellationStatus = useSelector(selectConstellationStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(constellationDatas());
    }, []);

    return (
        <div className="constellation_list_box" boxtype={userStatus}>
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

export default ConstellationList;
