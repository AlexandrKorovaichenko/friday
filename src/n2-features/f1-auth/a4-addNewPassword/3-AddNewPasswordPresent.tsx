import React from 'react';

type AddNewPasswordType = {
    content: string
}

export const AddNewPasswordPresent = ({content, ...props}: AddNewPasswordType) => {
    return <div>{content}</div>
}