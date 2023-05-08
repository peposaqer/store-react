import React from "react";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import Care from "../Data/services"

export default function ServiceItem() {
    const params = useParams();
    const x = Care.filter((d) => d.id === parseInt(params.id))[0];

    return (
        <>
        fsdfsdfs
            <div className="art">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pro-des">
                                <h1>{x.description}</h1>fsdfsdfsd
                                bfbdfb
                            </div>
                            bfdbfdgbd
                        </div>
                        <div className="col-md-6">
                            <div className="pro-logo">
                                {/* <img alt="" src={x.src} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
