import React from 'react';

type RegPropsType = {
    content: string
}

export const RegPresent = ({content, ...props}: RegPropsType) => {
    return <div>{content}</div>
}