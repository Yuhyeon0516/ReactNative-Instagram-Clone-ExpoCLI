import { FeedInfo } from "../@types/FeedInfo";
import { TypeRootReducer } from "../store/store";
import { sleep } from "../utils/sleep";
import { ThunkAction } from "redux-thunk";

export const SET_USER_INFO = "SET_USER_INFO" as const;
export const GET_MY_FEED_REQUEST = "GET_MY_FEED_REQUEST" as const;
export const GET_MY_FEED_SUCCESS = "GET_MY_FEED_SUCCESS" as const;
export const GET_MY_FEED_FAILURE = "GET_MY_FEED_FAILURE" as const;

export function setUserInfo(userId: string) {
  return {
    type: SET_USER_INFO,
    userId,
  };
}

export function getMyFeedRequest() {
  return {
    type: GET_MY_FEED_REQUEST,
  };
}

export function getMyFeedSuccess(list: FeedInfo[]) {
  return {
    type: GET_MY_FEED_SUCCESS,
    list,
  };
}

export function getMyFeedFailure() {
  return {
    type: GET_MY_FEED_FAILURE,
  };
}

export const signIn = (): TypeUserInfoThunkAction => async (dispatch) => {
  await sleep(1000);
  dispatch(setUserInfo("Test"));
};

export const getMyFeedList = (): TypeUserInfoThunkAction => async (dispatch) => {
  dispatch(getMyFeedRequest());
  await sleep(1000);
  dispatch(
    getMyFeedSuccess([
      {
        id: "ID1",
        content: "Content1",
        writer: {
          name: "Writer1",
          uid: "UID1",
        },
        image: "ImageURL1",
        likeHistory: ["UID1", "UID2", "UID3"],
        createdAt: new Date().getTime(),
      },
      {
        id: "ID2",
        content: "Content2",
        writer: {
          name: "Writer2",
          uid: "UID2",
        },
        image: "ImageURL2",
        likeHistory: ["UID1", "UID2", "UID3"],
        createdAt: new Date().getTime(),
      },
    ])
  );
};

export type TypeUserInfoThunkAction = ThunkAction<Promise<void>, TypeRootReducer, undefined, TypeUserInfoActions>;
export type TypeUserInfoActions =
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof getMyFeedRequest>
  | ReturnType<typeof getMyFeedSuccess>
  | ReturnType<typeof getMyFeedFailure>;
