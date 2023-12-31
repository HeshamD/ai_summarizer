/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const VITE_RAPID_API_ARTICLE_KEY = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',         // which api we want to call
        prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key',VITE_RAPID_API_ARTICLE_KEY);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints:(builder) =>({
        getSummary: builder.query({
            query:(params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        })
    })
});

export const {useLazyGetSummaryQuery} = articleApi;