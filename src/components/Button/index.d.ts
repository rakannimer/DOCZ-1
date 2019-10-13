import React from 'react';
import { ReactProps } from '../typings'

interface ButtonProps extends ReactProps.Props {
  disabled: Boolean;
  clickHandler: Function;
  isChecked: Boolean;
  buttonClasses: String |
  'primary-button' |
  'secondary-button' |
  'danger-button' |
  'transparent-button' |
  'section-placeholder-button' |
  'content-placeholder-button';
}

export class Button extends React.Component<ButtonProps, {}> { }
