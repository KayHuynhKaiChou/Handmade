import { useEffect } from "react";

interface RadioHM {
    id: string;
    form?: any;
    label: string;
    value?: string | number;
    name: string;
    checked?: boolean;
    disabled?: boolean;
    onChange: () => void;
}

export default function RadioHM({
    id,
    form,
    label,
    value,
    checked = false,
    disabled = false,
    onChange
} : RadioHM) {
  
  useEffect(() => {
    document.getElementById(id)?.addEventListener('click' , () => onChange())
  }, [])

  return (
    <div className="un_radio_wrap" id={id}>
        <input 
          id={id}
          type="radio" 
          className="un_radio"
          value={value}
          checked={checked}
        />
        <label htmlFor={id}>
            {label}
        </label>
    </div>
  )
}
