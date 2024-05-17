
import QueryProvider from './provider/QueryProvider';
import PaginationList from './pagination-list';

/* eslint-disable-next-line */
export interface InfiniteScrollPaginationProps {
  queryFn: () => void;
  queryKey: string[];
}

export function InfiniteScrollPagination({queryFn, queryKey}: InfiniteScrollPaginationProps) {
  return (
    <QueryProvider>
      <PaginationList queryFn={queryFn} queryKey={queryKey} />
    </QueryProvider>
  );
}

export default InfiniteScrollPagination;
