
import QueryProvider from './provider/QueryProvider';
import PaginationList from './pagination-list';

/* eslint-disable-next-line */
export interface InfiniteScrollPaginationProps {

}

export function InfiniteScrollPagination({}: InfiniteScrollPaginationProps) {
  return (
    <QueryProvider>
      <PaginationList  />
    </QueryProvider>
  );
}

export default InfiniteScrollPagination;
