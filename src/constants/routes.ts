// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const awsPath = "/dev/";
export const rootPath: string = window.location.href.includes(awsPath)
  ? `${awsPath}/`
  : "/";

const routes = {
  HOME: `${rootPath}`,
  DEVICE: `${rootPath}devices`,
  MEETING: `${rootPath}meeting`,
};

export default routes;
