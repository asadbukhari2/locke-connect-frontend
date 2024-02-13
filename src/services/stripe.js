import { Fetch } from '@/helpers/fetchWrapper';

import { useCancellablePromise } from '@/helpers/promiseHandler';
import { useEffect, useState } from 'react';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const _url = `${process.env.NEXT_PUBLIC_API_URL}/routes/v1`;

const stripeService = {
  GetProducts() {
    const [products, setProducts] = useState({
      items: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getProducts())
        .then(res => {
          setProducts(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, []);
    return {
      products_loading: status === STATUS.LOADING,
      products_error: status === STATUS.ERROR ? status : '',
      products_data: products,
    };
  },

  async getProducts({ page = 1, pageSize = 100, filterText = '' }) {
    console.log('sss');
    let res = await Fetch.get(`${_url}/get-products?page=${page}&pageSize=${pageSize}&filterText=${filterText}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log({ res });
      return {
        items: res?.items,
        totalItems: res?.totalItems,
        hasNextPage: res?.hasNextPage,
        lastPage: res?.lastPage,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default stripeService;
