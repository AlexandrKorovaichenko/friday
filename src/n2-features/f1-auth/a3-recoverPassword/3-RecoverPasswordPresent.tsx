import React from 'react';

type RecoverPasswordType = {
    content: string
}

export const RecoverPasswordPresent = ({content, ...props}: RecoverPasswordType) => {
    return <div>{content}</div>
}