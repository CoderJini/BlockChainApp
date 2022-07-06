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
            {/* col-xs-12 col-sm-6 col-md-8 */}
            <div className="row"> 
                <div className="
                    col-md-10 col-sm-10 col-xs-10 
                    col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Klaytn Countting App </h3>
                        </div>
                        <div className="panel-body">
                            <p className="lead">버튼을 클릭하여 count를 증가 또는 감소 시켜보세요!!</p>
                            <p className="lead">Count Result is : </p>
                            {/* count 올리기 */}
                            <button 
                                type="button" 
                                className="btn btn-default" 
                                onClick={onTest}>
                                <span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span>
                            </button>

                            {/* count 내리기 */}
                            <button 
                                type="button" 
                                className="btn btn-default" 
                                onClick={onTest}>
                                <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default KlayCountApp;