// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { LogLevel } from "amazon-chime-sdk-js";

export const AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER = "+17035550122";

export const VIDEO_INPUT = {
  NONE: "None",
  BLUE: "Blue",
  SMPTE: "SMPTE Color Bars",
};

export const AUDIO_INPUT = {
  NONE: "None",
  440: "440 Hz",
};

export const MAX_REMOTE_VIDEOS = 25;

export const AVAILABLE_AWS_REGIONS = {
  "ap-southeast-1": "Singapore",
};

export const VIDEO_INPUT_QUALITY = {
  "360p": "360p (nHD) @ 15 fps (600 Kbps max)",
  "540p": "540p (qHD) @ 15 fps (1.4 Mbps max)",
  "720p": "720p (HD) @ 15 fps (1.4 Mbps max)",
};

export const SDK_LOG_LEVELS = {
  debug: LogLevel.DEBUG,
  info: LogLevel.INFO,
  warn: LogLevel.WARN,
  error: LogLevel.ERROR,
  off: LogLevel.OFF,
};
