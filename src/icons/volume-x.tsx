import { omit } from 'solid-js';
import type { IconProps } from '../types';

export default function VolumeX(props: IconProps) {
  const rest = omit(props, 'color', 'size');

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color ?? 'currentColor'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...rest}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}
