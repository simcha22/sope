import React from 'react'

export default function LessonsByCategory(props) {

    let catName = props.match.params.cat;
    return (
        <div className="container">
            {catName}
        </div>
    )
}
