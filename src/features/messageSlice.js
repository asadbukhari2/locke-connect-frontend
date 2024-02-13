import peoplesService from '@/services/peoples';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getMessages = createAsyncThunk('messages/getMessages', async (author, receiver, conversationId) => {
  try {
    const response = await peoplesService.getMessages(author, receiver, conversationId);
    return { messages: response.data.messages };
  } catch (error) {
    console.log(error);
  }
});
const fetchAllConversations = createAsyncThunk('messages/fetchAllConversations', async () => {
  try {
    const response = await peoplesService.getAllConversations();
    console.log({ response });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initState = {
  messages: [],
  conversations: [],
  currentConversation: null,
  unreadMessages: null,
  error: '',
  errorChat: '',
  loading: false,
  loadingChat: false,
};

const messagesSlice = createSlice({
  name: 'chat',
  initialState: initState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setCurrentConversation: (state, action) => {
      state.currentConversation = action.payload;
    },
    setCountToZero: (state, action) => {
      const { conversationId } = action.payload;
      const updatedConversations = state.conversations.map(conversation => {
        if (conversation._id === conversationId) {
          return { ...conversation, unreadcount: 0 };
        }
        return conversation;
      });
      const hasUnreadMessages = updatedConversations.some(conversation => conversation.unreadcount > 0);

      state.unreadMessages = hasUnreadMessages;
      state.conversations = updatedConversations;
    },

    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    onLogout: (state, action) => {
      state.messages = [];
      state.conversations = [];
      state.currentConversation = null;
      state.error = '';
      state.errorChat = '';
      state.loading = false;
      state.loadingChat = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMessages.pending, (state, action) => {
        state.loadingChat = true;
        state.errorChat = '';
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.messages = action.payload?.messages ?? [];
        state.loadingChat = false;
        state.errorChat = '';
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.loadingChat = false;
        state.errorChat = 'Error';
      })
      .addCase(fetchAllConversations.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllConversations.fulfilled, (state, action) => {
        state.conversations = action.payload;
        state.unreadMessages = action.payload?.some(conversation => conversation.unreadcount > 0);
        state.loading = false;
      })
      .addCase(fetchAllConversations.rejected, (state, action) => {
        console.error(action.error.message);
        state.loading = false;
      });
  },
});

export const { setMessages, setConversations, setCurrentConversation, onLogout, setCountToZero } =
  messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
export { getMessages, fetchAllConversations };
