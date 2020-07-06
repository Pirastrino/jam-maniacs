import React, { useReducer, useContext, createContext, Dispatch } from 'react';
import storage from 'local-storage-fallback';

type State = typeof initialState;

export enum ActionTypes {
  TOGGLE_THEME = 'TOGGLE_THEME',
}

export type ToggleTheme = {
  type: ActionTypes.TOGGLE_THEME;
};

const initialState = {
  darkMode: storage.getItem('darkMode') === 'true' || false,
};

const reducer = (state: State, action: ToggleTheme) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_THEME: {
      const body = document.querySelector('body');
      if (body) body.className = state.darkMode ? 'light' : 'dark';
      storage.setItem('darkMode', (!state.darkMode).toString());
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    default:
      throw new Error('Uknown action type');
  }
};

const GlobalContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

const GlobalStateContext = createContext<State>({} as State);
const GlobalDispatchContext = createContext<Dispatch<ToggleTheme>>(
  {} as Dispatch<ToggleTheme>
);

const useGlobalState = () => useContext(GlobalStateContext);
const useGlobalDispatch = () => useContext(GlobalDispatchContext);

export { GlobalContextProvider, useGlobalState, useGlobalDispatch };
