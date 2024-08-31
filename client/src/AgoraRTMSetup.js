import { createClient } from 'agora-rtm-react';

const appId = "9a1498ce60ca46d18560550e58f31024";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useRTMClient = createClient(appId);