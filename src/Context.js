import React from 'react';

const MyContext = React.createContext({
    books: null,
    loading:true
});

export const Provider = MyContext.Provider;
export const Consumer = MyContext.Consumer;