import React, { Component, Fragment, useState } from 'react';
import styles from "./KlayCountApp.module.scss";
import caver from "../../klaytn/caver";
import caverKas from "../../klaytn/caver-kas";

const KlayCountApp = () =>{

    const onTest = () => {
        console.log(caverKas);
    }

    return (
        <Fragment>
            <button onClick={onTest}>test</button>
        </Fragment>
    )
}
export default KlayCountApp;