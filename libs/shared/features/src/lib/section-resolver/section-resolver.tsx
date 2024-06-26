/* eslint-disable-next-line */
//'use client';
import ComponentResolver from './component-resolver/component-resolver';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Section} from '@supernaut/shared-ui';

export interface SectionResolverProps {
  sections: any[];
  pageMode?: 'dark' | 'light' | string | undefined | null;
}

function generateRandomKey() {
  return Math.random().toString(36).substring(7);
}

export function SectionResolver({sections, pageMode}: SectionResolverProps) {

  if(!sections || sections.length === 0) {
    return null;
  }

  const mergeComponentProps = (componentProps: any) => {
    return componentProps;
  }


  return (<>
      { sections?.map((entry: any, index: number) => {
        return (entry?.__typename !== undefined) && (

          <>
            {(entry.__typename === 'Section') && (
              <Section {...mergeComponentProps(entry)}>
                <ComponentResolver key={`${entry!.component.__typename}-${generateRandomKey()} `} componentProps={mergeComponentProps(entry.component!)} />
              </Section>
            )}


          {(entry.__typename === 'HeaderComponent') && (
              <ComponentResolver key={`${entry!.__typename}-${generateRandomKey()} `}
                                 componentProps={mergeComponentProps(entry!)}/>

          )}
        </>
        )
      })}
    </>
  );
}

export default SectionResolver;
