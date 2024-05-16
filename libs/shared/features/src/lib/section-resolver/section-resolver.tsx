/* eslint-disable-next-line */
//'use client';
import ComponentResolver from './component-resolver/component-resolver';
import {Section, SectionProps} from '@supernaut/shared-ui';

export interface SectionResolverProps {
  sections: any[];
}

function generateRandomKey() {
  return Math.random().toString(36).substring(7);
}

export function SectionResolver({sections}: SectionResolverProps) {

  if(!sections || sections.length === 0) {
    return null;
  }

  console.log('SECTION',sections);

  return (<>
      { sections?.map((entry: any, index: number) => {
        return (entry?.__typename !== undefined) && (

          <>
            {(entry.__typename === 'Section') && (
              <Section {...entry}>
                <ComponentResolver key={`${entry!.component.__typename}-${generateRandomKey()} `} componentProps={entry.component!} />
              </Section>
            )}


          {(entry.__typename === 'HeaderComponent') && (
              <ComponentResolver key={`${entry!.__typename}-${generateRandomKey()} `}
                                 componentProps={entry!}/>

          )}
        </>
        )
      })}
    </>
  );
}

export default SectionResolver;
