/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as base from './base';
import * as batch_infer from './batch_infer';

export type Int64 = string | number;

export interface OpenGetBatchInferTaskReq {
  task_id?: string;
  userJwtToken?: string;
  /** 空间ID */
  space_id?: string;
  base?: base.Base;
}

export interface OpenGetBatchInferTaskResp {
  batchInferTask?: batch_infer.BatchInferTask;
  baseResp?: base.BaseResp;
}

export interface OpenReportBatchInferProgressReq {
  task_id?: string;
  errorMsg?: string;
  /** 空间ID */
  space_id?: string;
  base?: base.Base;
}

export interface OpenReportBatchInferProgressResp {
  baseResp?: base.BaseResp;
}
/* eslint-enable */
