import { omit } from 'solid-js';
import type { IconProps } from '../types';

export default function Voicemail(props: IconProps) {
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
      <circle cx="5.5" cy="11.5" r="4.5" />
      <circle cx="18.5" cy="11.5" r="4.5" />
      <line x1="5.5" y1="16" x2="18.5" y2="16" />
    </svg>
  );
}
