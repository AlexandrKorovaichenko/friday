import React, { useState } from 'react';
import SuperButton from '../../n1-main/m1-ui/common/superButton/SuperButton';
import SuperCheckbox from '../../n1-main/m1-ui/common/superCheckBox/SuperCheckBox';
import SuperInputText from '../../n1-main/m1-ui/common/superInput/SuperInput';

export const Components = () => {

  const [checked, setChecked] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const onClickHandler = () => {
    setChecked(false)
    setText('')
  }

  return (
    <div>
        <SuperCheckbox checked = {checked} onChangeChecked = {setChecked}>Check box</SuperCheckbox>
        <SuperInputText value = {text} onChangeText = {setText} />
        <SuperButton onClick={onClickHandler}>Button</SuperButton>
    </div>
  );
}

