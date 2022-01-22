import React from "react";
import css from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={css.content}>
            <div className={css.information}>
                <img src="https://www.vippng.com/png/full/221-2219554_bg-blue-wrap-data-grid-hill.png"/>
            </div>
            <div className={css.item}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cat_Sphynx._Kittens._img_11.jpg/2560px-Cat_Sphynx._Kittens._img_11.jpg"/>
                <a>information</a>
            </div>
        </div>
)
}
 export default ProfileInfo;