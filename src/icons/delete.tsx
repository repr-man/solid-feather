import { omit } from 'solid-js';
import type { IconProps } from '../types';

export default function Delete(props: IconProps) {
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
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <line x1="18" y1="9" x2="12" y2="15" />
      <line x1="12" y1="9" x2="18" y2="15" />
    </svg>
  );
}
