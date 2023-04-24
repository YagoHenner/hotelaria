import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import { InputHookProps } from "../../interfaces/interfaces";

export const InputHook: React.FC<InputHookProps> = ({
  name,
  label,
  type,
  placeholder,
  control,
  width,
  height,
  defaultValue,
  obrigatorio = false,
}) => {
  const requiredMessage = (label: string): string => {
    return `Por favor preencha o campo ${label}`;
  };
  return (
    <div className='flex-column'>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        rules={{
          required: obrigatorio && requiredMessage(label || ""),
        }}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            style={{ width, height }}
            value={field.value || ""}
            onChange={field.onChange}
          />
        )}
      />
    </div>
  );
};
