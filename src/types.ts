import type { JSX } from '@solidjs/web';

/** A static SVG child copied from the Feather icon definitions. */
export type IconNode = readonly [
  tag: keyof JSX.IntrinsicElements,
  attributes: Readonly<Record<string, string>>,
];

/** Props shared by every icon, plus the native SVG attributes Solid supports. */
export type IconProps = Omit<
  JSX.SvgSVGAttributes<SVGSVGElement>,
'children' | 'color'
> & {
  color?: string;
  size?: string | number;
};
