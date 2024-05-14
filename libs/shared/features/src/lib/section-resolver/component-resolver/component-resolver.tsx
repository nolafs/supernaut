/* eslint-disable-next-line */
import {componentMap} from './component-map';

export interface ComponentResolverProps {
  componentProps: {
    sys: { id: string };
    __typename: string;
    [k: string]: any;
  },
  forceGql?: boolean;
}

let previousComponent: string | null = null;

export function ComponentResolver({componentProps}: ComponentResolverProps) {
  console.log(componentProps.__typename);
  // @ts-ignore
  const Component = componentMap[componentProps.__typename];

  const previousComponentProp = previousComponent;
  previousComponent = componentProps.__typename;

  return (
    <Component
      {...componentProps}
      previousComponent={previousComponentProp}
    />
  );
}

export default ComponentResolver;
