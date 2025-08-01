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

import * as common from './common';

export type Int64 = string | number;

export interface CreatePluginFunctionReleaseRequest {
  /** Cluster name */
  cluster: string;
  /** Plugin function ID */
  id: string;
  /** List of MQ event IDs */
  mqevent_ids?: Array<string>;
  /** Region name */
  region: string;
  /** Service ID */
  service_id: string;
}

export interface CreatePluginFunctionReleaseResponse {
  code?: number;
  data?: common.ApiResponseDataMessage2;
  error?: string;
}

export interface CreatePluginFunctionRevisionRequest {
  /** Cluster name */
  cluster: string;
  /** Description of the plugin function */
  description?: string;
  /** Environments for the plugin */
  environments?: Record<string, string>;
  /** Timeout for plugin initialization */
  init_timeout?: number;
  /** Name of the plugin used */
  plugin_name?: string;
  /** Version of the plugin used */
  plugin_version?: string;
  /** Region name */
  region: string;
  /** Timeout for plugin requests */
  request_timeout?: number;
  /** Service ID */
  service_id: string;
}

export interface CreatePluginFunctionRevisionResponse {
  code?: number;
  data?: PluginFunctionRevision;
  error?: string;
}

export interface DeletePluginFunctionRevisionRequest {
  /** Cluster name */
  cluster: string;
  /** Plugin function ID */
  id: string;
  /** Region name */
  region: string;
  /** Service ID */
  service_id: string;
}

export interface DeletePluginFunctionRevisionResponse {
  code?: number;
  data?: PluginFunctionRevision;
  error?: string;
}

export interface GetGlobalPluginFunctionsRequest {
  /** Pagination limit */
  limit?: number;
  /** Pagination offset */
  offset?: number;
}

export interface GetGlobalPluginVersionsRequest {
  /** Pagination limit */
  limit?: number;
  /** Pagination offset */
  offset?: number;
  /** Plugin name */
  plugin_name: string;
  /** Service ID */
  service_id: string;
}

export interface GetPluginFunctionRevisionDetailRequest {
  /** Cluster name */
  cluster: string;
  /** Plugin function ID */
  id: string;
  /** Region name */
  region: string;
  /** Service ID */
  service_id: string;
}

export interface GetPluginFunctionRevisionDetailResponse {
  code?: number;
  data?: PluginFunctionRevisionDetail;
  error?: string;
}

export interface GetPluginFunctionRevisionsRequest {
  /** Cluster name */
  cluster: string;
  /** Pagination limit */
  limit?: number;
  /** Pagination offset */
  offset?: number;
  /** Region name */
  region: string;
  /** Service ID */
  service_id: string;
}

export interface GetPluginFunctionRevisionsResponse {
  code?: number;
  data?: Array<PluginFunctionRevision>;
  error?: string;
}

export interface GetPluginFunctionsRequest {
  /** Pagination limit */
  limit?: number;
  /** Pagination offset */
  offset?: number;
  /** Service ID */
  service_id: string;
}

export interface GetPluginFunctionsResponse {
  code?: number;
  data?: Array<PluginFunction>;
  error?: string;
}

export interface GetPluginVersionsRequest {
  /** Pagination limit */
  limit?: number;
  /** Pagination offset */
  offset?: number;
  /** Plugin name */
  plugin_name: string;
  /** Region name */
  region: string;
  /** Service ID */
  service_id: string;
}

export interface GetPluginVersionsResponse {
  code?: number;
  data?: Array<PluginVersion>;
  error?: string;
}

/** Plugin function definition */
export interface PluginFunction {
  /** Plugin name */
  plugin_name?: string;
  /** Regions where the plugin is available */
  regions?: Array<string>;
  /** SCM name of the plugin */
  scm_name?: string;
}

/** Plugin function configuration */
export interface PluginFunctionConfig {
  /** Description of the plugin function */
  description?: string;
  /** Environments for the plugin */
  environments?: Record<string, string>;
  /** Timeout for plugin initialization */
  init_timeout?: number;
  /** Name of the plugin used */
  plugin_name?: string;
  /** Version of the plugin used */
  plugin_version?: string;
  /** Timeout for plugin requests */
  request_timeout?: number;
}

/** Plugin function revision */
export interface PluginFunctionRevision {
  /** Cluster name */
  cluster?: string;
  /** Creation time */
  created_at?: string;
  /** Creator */
  created_by?: string;
  /** Function ID */
  function_id?: string;
  /** Plugin function ID */
  id?: string;
  /** Revision number */
  number?: number;
  /** Plugin function configuration */
  plugin_function_config?: PluginFunctionConfig;
  /** Region name */
  region?: string;
  /** Release status */
  release_status?: string;
  /** Release ticket link */
  release_ticket_link?: string;
  /** Number of released MQ events */
  released_mq_number?: number;
  /** Service ID */
  service_id?: string;
}

/** Plugin function revision detail */
export interface PluginFunctionRevisionDetail {
  /** Cluster name */
  cluster?: string;
  /** Creation time */
  created_at?: string;
  /** Creator */
  created_by?: string;
  /** Function ID */
  function_id?: string;
  /** Plugin function ID */
  id?: string;
  /** Revision number */
  number?: number;
  /** Plugin function configuration */
  plugin_function_config?: PluginFunctionConfig;
  /** Region name */
  region?: string;
  /** Release status */
  release_status?: string;
  /** Release ticket link */
  release_ticket_link?: string;
  /** Number of released MQ events */
  released_mq_number?: number;
  /** Service ID */
  service_id?: string;
  /** List of released MQ triggers */
  released_mq_triggers?: Array<common.GlobalMQEventTriggerResponseData>;
}

/** Plugin version information */
export interface PluginVersion {
  /** Branch name */
  branch_name?: string;
  /** Commit hash */
  commit_hash?: string;
  /** Commit message */
  message?: string;
  /** Plugin name */
  plugin_name?: string;
  /** Plugin status */
  status?: string;
  /** Plugin version */
  version?: string;
  /** SCM version */
  scm_version?: string;
}
/* eslint-enable */
