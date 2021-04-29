import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import fetchOneChatService from 'main/Services/Chat/fetchOne'

export default {
  initialState: buildAsyncState('fetchOne'),
  action: buildAsyncActions('chat/fetchOne', fetchOneChatService),
  reducers: buildAsyncReducers({
    errorKey: 'fetchOne.error',
    loadingKey: 'fetchOne.loading',
  }),
}
