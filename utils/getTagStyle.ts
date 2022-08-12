import chroma from "chroma-js";
import { CSSObjectWithLabel } from "react-select";
import { CSSProperties } from "react";

export const getTagStyle = (colorString: string, options?: Partial<{
  styles: CSSObjectWithLabel,
  isDisabled: boolean,
  isSelected: boolean,
  isFocused: boolean,
}>): CSSObjectWithLabel => {
  const color = chroma(colorString);

  return {
    ...options?.styles,
    backgroundColor: options?.isDisabled
      ? undefined
      : options?.isSelected
        ? color.css()
        : options?.isFocused
          ? color.alpha(0.1).css()
          : undefined,
    color: options?.isDisabled
      ? '#ccc'
      : options?.isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : color.css(),
    cursor: options?.isDisabled ? 'not-allowed' : 'default',

    ':active': {
      ...options?.styles?.[':active'],
      backgroundColor: !options?.isDisabled
        ? options?.isSelected
          ? color.css()
          : color.alpha(0.3).css()
        : undefined,
    },
  };
}