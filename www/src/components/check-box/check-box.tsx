import { useCallback } from 'react';
import { useUncontrolled } from 'uncontrollable';

type CheckBoxType = {
  checked?: boolean,
  text?: string,
  defaultChecked?: boolean,
  onChange?: (args:any) => void
}

const CheckBox = (props: CheckBoxType) => {
  const {
    text,
    checked,
    onChange,
    ...controlledProps
  } = useUncontrolled(props, {
    checked: 'onChange'
  });
  
  const handleOnChange = useCallback(() => onChange?.(!checked), [checked, onChange])

  return <div className="form-check form-switch">
    <input checked={checked} onChange={handleOnChange} id="flexSwitchCheckDefault" className="form-check-input" type="checkbox" {...controlledProps}/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text}</label>
  </div>
}

export default CheckBox;