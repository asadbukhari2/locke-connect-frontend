import { Fetch } from '@/helpers/fetchWrapper';

import { useCancellablePromise } from '@/helpers/promiseHandler';
import { useEffect, useState } from 'react';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const _url = `${process.env.NEXT_PUBLIC_API_URL}/routes/v1`;

const peoplesService = {
  GetRecomenderAgents() {
    const [agents, setAgents] = useState({
      agents: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getRecomenderAgents())
        .then(res => {
          setAgents(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, []);
    return {
      agents_loading: status === STATUS.LOADING,
      agents_error: status === STATUS.ERROR ? status : '',
      agents_data: agents,
    };
  },

  GetPeoples(searchQuery) {
    const [peoples, setPeoples] = useState({
      peoples: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getPeoples(searchQuery))
        .then(res => {
          setPeoples(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [searchQuery]);
    return {
      peoples_loading: status === STATUS.LOADING,
      peoples_error: status === STATUS.ERROR ? status : '',
      peoples_data: peoples,
    };
  },

  GetConversations() {
    const [conversations, setConversations] = useState({
      conversations: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getAllConversations())
        .then(res => {
          setConversations(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, []);
    return {
      conversations_loading: status === STATUS.LOADING,
      conversations_error: status === STATUS.ERROR ? status : '',
      conversations_data: conversations,
    };
  },

  GetDocuments(searchQuery, refetch) {
    const [documents, setDocuments] = useState({
      totalItems: 0,
      items: [],
      hasNextPage: false,
      lastPage: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getDocuments(searchQuery))
        .then(res => {
          setDocuments(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [searchQuery, refetch]);
    return {
      documents_loading: status === STATUS.LOADING,
      documents_error: status === STATUS.ERROR ? status : '',
      documents_data: documents,
    };
  },

  GetMyFavouritePeoples(searchQuery, refetch) {
    const [favPeoples, setFavPeoples] = useState({
      totalItems: 0,
      items: [],
      hasNextPage: false,
      lastPage: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getMyFavouritePeoples(searchQuery))
        .then(res => {
          setFavPeoples(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [searchQuery, refetch]);
    return {
      fav_peoples_loading: status === STATUS.LOADING,
      fav_peoples_error: status === STATUS.ERROR ? status : '',
      fav_peoples_data: favPeoples,
    };
  },

  GetNotifications(searchQuery) {
    const [notifications, setNotifications] = useState({
      totalItems: 0,
      items: [],
      hasNextPage: false,
      lastPage: 0,
      nextPage,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getNotifications(searchQuery))
        .then(res => {
          setNotifications(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, []);
    return {
      notifications_loading: status === STATUS.LOADING,
      notifications_error: status === STATUS.ERROR ? status : '',
      notifications_data: notifications,
    };
  },

  async getRecomenderAgents() {
    let res = await Fetch.get(`${_url}/recommender/agents`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        agents: res.data,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getPeoples({ page = 1, pageSize = 10, address = '' }) {
    let res = await Fetch.get(`${_url}/agents?page=${page}&pageSize=${pageSize}&address=${address}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        peoples: res.data,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getAllConversations() {
    let res = await Fetch.get(`${_url}/get-all-conversation`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getMessages({ author = '', receiver = '', conversationId }) {
    let res = await Fetch.get(
      `${_url}/get-conversation?author=${author}&receiver=${receiver}&conversationId=${conversationId}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async deleteConversation(id) {
    let res = await Fetch.delete(`${_url}/conversation/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getDocuments({ page = 1, pageSize = 10, filterText = '' }) {
    let res = await Fetch.get(`${_url}/get-documents?page=${page}&pageSize=${pageSize}&filterText=${filterText}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
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
  async deleteDocument(id) {
    let res = await Fetch.delete(`${_url}/delete-document/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async addPeopleToConversation(id, body) {
    let res = await Fetch.put(`${_url}/add-people/${id}`, body);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async toggleFavouritePeople(payload) {
    let res = await Fetch.post(`${_url}/toggle-favourite-people`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getMyFavouritePeoples({ page = '', pageSize = '' }) {
    let res = await Fetch.get(`${_url}/my-liked-peoples?page=${page}&pageSize=${pageSize}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        items: res?.data?.items,
        totalItems: res?.data?.totalItems,
        hasNextPage: res?.data?.hasNextPage,
        lastPage: res?.data?.lastPage,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getNotifications({ page = '1', pageSize = '10', all = '' }) {
    let res = await Fetch.get(`${_url}/notifications?page=${page}&pageSize=${pageSize}&all=${all}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        items: res?.data?.items,
        totalItems: res?.data?.totalItems,
        hasNextPage: res?.data?.hasNextPage,
        lastPage: res?.data?.lastPage,
        nextPage: res?.data?.nextPage,
        currentPage: res?.data?.currentPage,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async markNotificationRead(id) {
    let res = await Fetch.put(`${_url}/read-notification/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async deleteNotification(id) {
    let res = await Fetch.delete(`${_url}/notification/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default peoplesService;
