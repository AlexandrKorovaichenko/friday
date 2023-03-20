import React from 'react';

type LoginPropsType = {
    content: string
}

export const LoginPresent = ({content, ...props}: LoginPropsType) => {
    return <div>{content}</div>
}