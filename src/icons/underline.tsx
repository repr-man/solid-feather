import { omit } from 'solid-js';
import type { IconProps } from '../types';

export default function Underline(props: IconProps) {
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
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
      <line x1="4" y1="21" x2="20" y2="21" />
    </svg>
  );
}
