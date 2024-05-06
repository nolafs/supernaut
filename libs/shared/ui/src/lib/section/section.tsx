/* eslint-disable-next-line */
import {ReactNode} from 'react';

export interface SectionProps {
  internalName: string;
  children: ReactNode;
  marginTop?: boolean;
  marginBottom?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  mode?: 'light' | 'dark';
  backgroundColor?: string;
  color?: string;
  align?: 'center' | 'left' | 'right';
  width?: 'sm' | 'lg' | 'xl' | 'full';
  height?: 'auto' | 'half' | 'full';
  lineTop?: boolean;
  lineBottom?: boolean;
}

export function Section({internalName, children}: SectionProps) {
  return (
    <section id={internalName}>
      {children}
    </section>
  );
}

export default Section;
