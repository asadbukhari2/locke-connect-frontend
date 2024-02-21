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
  GetProducts(searchQuery) {
    const [products, setProducts] = useState({
      items: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getProducts(searchQuery))
        .then(res => {
          // console.log({ res });
          setProducts(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(err => {
          console.log({ err });
          setStatus(STATUS.ERROR);
        });
    }, []);
    return {
      products_loading: status === STATUS.LOADING,
      products_error: status === STATUS.ERROR ? status : '',
      products_data: products,
    };
  },

  async getProducts({ page = 1, pageSize = 100, filterText = '' }) {
    let res = await Fetch.get(`${_url}/products?page=${page}&pageSize=${pageSize}&filterText=${filterText}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        items: res?.records?.items,
        totalItems: res?.records?.totalItems,
        hasNextPage: res?.records?.hasNextPage,
        lastPage: res?.records?.lastPage,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getStripeKey() {
    let res = await Fetch.get(`${_url}/get-stripe-key`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async createCustomerAndCard(payload) {
    let res = await Fetch.post(`${_url}/create-customer-card-make-payment`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getAllCards(email) {
    let res = await Fetch.get(`${_url}/get-all-cards`, { email });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async removeCustomerCard(email) {
    let res = await Fetch.get(`${_url}/remove-card`, { email });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default stripeService;
