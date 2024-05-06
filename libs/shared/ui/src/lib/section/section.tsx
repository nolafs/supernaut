/* eslint-disable-next-line */
import {ReactNode} from 'react';

export interface SectionProps {
  id: string;
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

export function Section({id, children}: SectionProps) {
  return (
    <section id={id}>
      {children}
    </section>
  );
}

export default Section;
