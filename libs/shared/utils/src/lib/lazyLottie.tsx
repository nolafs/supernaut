
import {useQuery} from '@tanstack/react-query';
import {type LottieComponentProps} from 'lottie-react';
import {Suspense, lazy, useEffect, useRef, useState} from 'react';
import {Skeleton} from '@supernaut/shared-ui';
import cn from 'classnames';

const LazyLottieComponent = lazy(() => import('lottie-react'));

interface LottieProps<T extends Record<string, unknown>> {
  getAnimationData: () => Promise<T>;
  id: string;
}

export function LazyLottie<T extends Record<string, unknown>>({
                                                                getAnimationData,
                                                                id,
                                                                ref,
                                                                ...props
                                                              }: LottieProps<T> & Omit<LottieComponentProps, 'animationData'>) {
  const {data} = useQuery({
    queryKey: [id],
    queryFn: async () => {
      void import('lottie-react'); // Trigger the library lazy load even if the animationData is not ready
      return getAnimationData();
    },
    enabled: typeof window !== 'undefined',
  });

  if (!data) return <Skeleton className={cn(`w-[${props.width}] h-[${props.height}]`)}/>;

  return (
    <Suspense fallback={<Skeleton className={cn(`w-[${props.width}] h-[${props.height}]`)}/>}>
      <LazyLottieComponent animationData={data} {...props} />
    </Suspense>
  );
}
