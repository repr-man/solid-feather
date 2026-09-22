import { omit } from 'solid-js';
import type { IconProps } from '../types';

export default function ChevronsDown(props: IconProps) {
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
      <polyline points="7 13 12 18 17 13" />
      <polyline points="7 6 12 11 17 6" />
    </svg>
  );
}
