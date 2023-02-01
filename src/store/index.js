// eslint-disable-next-line
import {configureStore} from "@reduxjs/toolkit"

import { rootReducer } from "./reducer";

const store = configureStore({
    reducer: {
      cart: rootReducer
    },
  });

export default store;