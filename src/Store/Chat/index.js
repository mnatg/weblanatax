import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchOne from './FetchOne'

const sliceInitialState = {
  item: {},
}

export default buildSlice('chat', [FetchOne], sliceInitialState).reducer
