package com.videogo.ui.videotalk;

import android.view.Surface;

import com.ezviz.sdk.videotalk.bean.ClientJoinInfo;
import com.ezviz.sdk.videotalk.meeting.EZRtcParam;

public interface OnStatusChangedListener {

    void onSurfaceSet(String userId, EZRtcParam.StreamType type, Surface surface);

    void onUnSubscribe(String userId, EZRtcParam.StreamType type);

    void onSubscribe(String clientId);

    void onkickoutDevice(ClientJoinInfo info);
}
