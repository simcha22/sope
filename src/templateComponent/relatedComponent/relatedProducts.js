import React from 'react'
import RelatedBox from './relatedBox';

export default function RelatedProducts(props) {
    let related = props.related;
    return (
        <div className="container">
            <div className="text-center">
                <h2>{props.title}</h2>
            </div>
            <div className="row">
                <RelatedBox/>
                <RelatedBox/>
                <RelatedBox/>
                <RelatedBox/>
            </div>
        </div>
    )
}
